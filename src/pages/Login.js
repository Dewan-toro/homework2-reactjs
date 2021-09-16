import { useState } from "react";
import {
  Input,
  Form,
  Button,
  Card,
  Image,
  message,
  Typography,
  Select,
} from "antd";
import "antd/dist/antd.css";

const { Title } = Typography;
const { Option } = Select;

function Login(props) {
  const [isError, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    if (email === "anon@mail.com" && password === "anonim") {
      props.onLogin();
    } else {
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
        boxShadow: "inherit",
        flexDirection: "column",
      }}
    >
      <Image width={230} src="https://i.ibb.co/sRxB8VL/Cybercode.png" />
      <Title>Home Loans </Title>
      <Card style={{ width: "35vw" }}>
        <Form
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 16,
          }}
        >
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

          <Form.Item name="loginType" label="Login as">
            <Select defaultValue="Customer">
              <Option value="customer">Customer</Option>
              <Option value="petugas">Petugas</Option>
            </Select>
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 6,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit" onClick={onLogin}>
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
      {isError ? message.error("Check your email address and password") : null}
    </div>
  );
}

export default Login;
