import { Button, Card, Col, Form, Input, Modal, Row } from "antd";
import { useStore } from "../store";
import { ILogin } from "../models/Login";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalEmail, setModalEmail] = useState("");
  const { userStore } = useStore();
  const navigate = useNavigate();

  const onFinish = (user: ILogin) => {
    userStore.login(user);
    if (userStore.token) {
      navigate("/");
    }
  };

  const onSubmitModal = () => {
    setModalEmail("");
    setIsModalVisible(false);
  };

  const onCancelModal = () => {
    setModalEmail("");
    setIsModalVisible(false);
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
          <Form.Item>
            <a onClick={() => setIsModalVisible(true)} type="link">
              Forgot Password?
            </a>
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

      <Modal
        title="Forgot Password"
        visible={isModalVisible}
        onOk={onSubmitModal}
        onCancel={onCancelModal}
        width={300}
      >
        <p>Email</p>
        <Input
          value={modalEmail}
          onChange={(e) => setModalEmail(e.target.value)}
        />
      </Modal>
    </div>
  );
};

export default Login;
