import { Button, Card, Col, Form, Input, Row } from "antd";
import { useStore } from "../store";
import { ILogin } from "../models/Login";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { userStore } = useStore();
  const navigate = useNavigate();

  const onFinish = (user: ILogin) => {
    userStore.login(user);
    if (userStore.token) {
      navigate("/");
    }
  };

  return (
    <div className="login-container">
      <Card title="Login" style={{ width: 300 }}>
        <Form
          name="basic"
          labelCol={{
            span: 24,
          }}
          wrapperCol={{
            span: 24,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 10,
              span: 24,
            }}
          >
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
