import { Button, Card, Col, Form, Input, Row } from "antd";
import { useState } from "react";
import { useStore } from "../store";

const Profile = () => {
  const { userStore } = useStore();

  const onSaveName = () => {
    userStore.changeName();
  };
  const onSavePassword = (values: any) => {
    console.log(values)
    userStore.changePassword();
  };

  return (
    <div className="profile-container">
      <Card style={{ width: 400 }}>
        <h1>Change Profile</h1>
        <Row gutter={10}>
          <Col className="gutter-box" span={24}>
            <Form
              onFinish={onSavePassword}
              labelCol={{
                span: 24,
              }}
              wrapperCol={{
                span: 24,
              }}
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
                <Input placeholder="Name" />
              </Form.Item>

              <Form.Item>
                <Button
                  onClick={onSaveName}
                  type="primary"
                  block
                  htmlType="submit"
                >
                  Save Name
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
        <Row gutter={10}>
          <Col className="gutter-box" span={24}>
            <Form
              onFinish={onSavePassword}
              labelCol={{
                span: 24,
              }}
              wrapperCol={{
                span: 24,
              }}
            >
              <Form.Item
                label="Old Password"
                name="old-password"
                rules={[
                  {
                    required: true,
                    message: "Please input your old password!",
                  },
                ]}
              >
                <Input.Password placeholder="Old Password" />
              </Form.Item>
              <Form.Item
                label="New Password"
                name="new-password"
                rules={[
                  {
                    required: true,
                    message: "Please input your new password!",
                  },
                ]}
              >
                <Input.Password placeholder="New Password" />
              </Form.Item>
              <Form.Item
                label="New Repassword"
                name="new-repassword"
                rules={[
                  {
                    required: true,
                    message: "Please input your new repassword!",
                  },
                ]}
              >
                <Input.Password placeholder="New Repassword" />
              </Form.Item>
              <Form.Item>
                <Button
                  onClick={onSavePassword}
                  type="primary"
                  block
                  htmlType="submit"
                >
                  Save Password
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Profile;
