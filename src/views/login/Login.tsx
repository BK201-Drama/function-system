/**
 * interface: 用来定义一个类结构，用来定义一个类有哪些属性和方法
 * 同时接口也可以当成类型声明去使用
 *  interface Shape {
 *    color: string;
 *  }
 *
 *  interface PenStroke {
 *    penWidth: number;
 *  }
 *
 *  interface Square extends Shape, PenStroke {
 *    sideLength: number;
 *  }
 *
 *  let square: Square = {
 *    color: 'red',
 *    sideLength: 10,
 *    penWidth: 10
 *  };
 * 
 * <Template>: 泛型，用来定义一个类型变量，能够捕获传入的类型
 * 前面的<T>代表了泛型变量是什么
 *  function identified<T> (arg: T): T {
 *    return arg;
 *  }
 * 当然，因为类型不确定，所以调用一些类型固有的方法是不允许的，比如length
 */

import { useState, useEffect, ReactElement } from 'react';

import { Form, Input, Button, Checkbox } from 'antd';

interface AccountAndPassword {
  account: string;
  password: string
}

interface ErrorInterface {
  errorFields: Array<any>;
  outOfDate: boolean;
  values: AccountAndPassword
}

const styleObj = {
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#008c8c'
}

const Login = ():ReactElement => {

  const [account, setAccount] = useState<string>('');

  const onFinish = (values: AccountAndPassword) : void => {
    console.log('Success:', values);
    setAccount(values.account);
  };

  const onFinishFailed = (errorInfo: ErrorInterface) : void => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div style={styleObj}>
      <div style={{width: 500, backgroundColor: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '50px', flexDirection: 'column', borderRadius: '4px'}}>
        <h1 style={{paddingBottom: '20px'}}>login</h1>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;