
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
import { instance } from "../api/instance";

const { Title } = Typography;
const { Option } = Select;

function Login() {
  const onLogin = ( values ) => {
    instance.post("/login", {
      username: values.username,
      password: values.password,
      login_as: "1"
    }).then(() => {
      message.success("Login Succesfull!")
    }).catch(() => {
      message.error("Check your email address and password!")
    });
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
          onFinish={onLogin}
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
              type="username"
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
            <Button type="primary" htmlType="submit" >
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default Login;
