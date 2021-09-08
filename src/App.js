import React from 'react';
import { Input, Form, Button, Card, Image } from 'antd';
import 'antd/dist/antd.css';
import './App.css';

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        boxShadow: "inherit"
      }}
    >
      <Image width={650} src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*OJoaQ77tczIAAAAAAAAAAABkARQnAQ" />
      <Card title="Login" style={{ width: "35vw" }}>
        <Form layout="vertical">
          <Form.Item 
          label="Username" 
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },

          ]}
          >
            <Input placeholder="Input Username" />
          </Form.Item>
          <Form.Item 
          label="Password" 
          name="password" 
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },

          ]}
          >
            <Input.Password placeholder="Input Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Sign In
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default App;
