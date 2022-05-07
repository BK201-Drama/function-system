import './PageContainer.css';
import {Routes, Route} from 'react-router-dom';
import { Layout, Menu, Breadcrumb, MenuProps } from 'antd';
import SideBar from '../../components/SideBar/SideBar';

import Login from "../login/Login";
import FileUpload from './FileUpload/FileUpload';
import Interview from './Interview/Interview';

const {Header, Sider, Content} = Layout;

function PageContainer () {
  return (
    <Layout>
      <Header className="header">
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <SideBar />
        </Sider>
        <Layout style={{ padding: 24 }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: '84vh',
            }}
          >
            <Routes>
              <Route path='/' element={<Interview />}/>
              <Route path='/upload' element={<FileUpload />}/>
              <Route path='/interview' element={<Interview/>}/>
              <Route path='*' element={<Login/>}/>
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default PageContainer;