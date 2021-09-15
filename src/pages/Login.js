import { useState } from 'react';
import { Input, Form, Button, Card, Image, message } from 'antd';
import 'antd/dist/antd.css';

function Login(props) {
    const [isError, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onLogin = () => {
        if (email === "anon@mail.com" && password === "anonim") {
            props.onLogin();
        }else {
            setError(true);
        }
    };


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
            <Input 
            placeholder="Enter your username." 
            type="email"
            onChange={(event) => setEmail(event.target.value)}
            />
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
            <Input.Password 
            placeholder="Enter your account password." 
            type="password"
            onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Button 
            type="primary" 
            htmlType="submit" block
            onClick={onLogin}
            >
              Sign In
            </Button>
          </Form.Item>
        </Form>
      </Card>
      {isError ? (
          message.error('Check your email address and password')
      ) :null }
    </div>
  );
}

export default Login;
