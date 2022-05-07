import React, {useEffect, useState, ReactElement, FC} from 'react'
import { 
  useLocation,
  useNavigate,
  useParams
 } from 'react-router-dom';
import { Layout, Menu, MenuProps } from 'antd';
import {Scrollbars} from 'react-custom-scrollbars';
import style from './SideMenu.module.css';
import { ItemType } from 'rc-menu/lib/interface';

type MenuItem = Required<MenuProps>['items'][number];

// 注意：react-router-dom没有withRouter组件了，得自己封装一个
function withRouter(Component: any) {
  function ComponentWithRouterProp(props: any) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component {...props} router={{ location, navigate, params }}/>
    );
  }

  return ComponentWithRouterProp;
}

const navigateItem = (Component: any): any => {
  function ComponentTemp (props: any) {
    let navigate = useNavigate();
    return <Component {...props} onClick={() => {navigate('/interview')}}/>
  }
  return ComponentTemp;
}

function getItem(
  label: React.ReactNode,
  key: React.Key,
  children?: MenuItem[],
  icon?: React.ReactNode,
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const SideBarArray: Array<any> = [
  {
    key: '/home',
    title: '首页'
  }, {
    key: '/upload',
    title: '文件上传'
  }, {
    key: '/interview',
    title: '面试'
  }, {
    key: '/lazyLoad',
    title: '漫画懒加载'
  }
];

const SideBar = (props: any): React.ReactElement => {

  const [menuList, setMenuList] = useState<Array<any>>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // 到时候会弄成后端渲染
    setMenuList(SideBarArray);
  })

  const getMenu = (SideBarArray: Array<any>, props: any): JSX.Element => {

    const renderChild = (childArray: Array<any>): Array<MenuItem> => {
      const childJSX = childArray.map(item => {
        const {key, title} = item;
        if (item.children) {
          return getItem(title, key, renderChild(item.children));
        } else {
          return getItem(title, key)
        }
      });
  
      return childJSX;
    }
    
    const menu = <Menu items={renderChild(SideBarArray)} onSelect={({key}) => {navigate(key)}}></Menu>;
    return menu;
  }

  return (
    getMenu(menuList, props)
  );
}

export default SideBar;