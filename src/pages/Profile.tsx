import { Button, Card, Col, Form, Input, Row } from "antd";
import { useState } from "react";
import { useStore } from "../store";

const Profile = () => {
  const { userStore } = useStore();

  const onChangeName = (e: any) => {
    userStore.setName(e.target.value);
  };
  const onChangePassword = (e: any) => {
    userStore.setPassword(e.target.value);
  };

  const onSaveName = () => {
    userStore.changeName();
  };
  const onSavePassword = () => {
    userStore.changePassword();
  };

  return (
    <div className="profile-container">
      <Card style={{ width: 400 }}>
        <h1>Change Profile</h1>
        <Row gutter={10}>
          <Col className="gutter-box" span={16}>
            <Input
              defaultValue={userStore.user.name}
              placeholder="Name"
              onInput={onChangeName}
            />
          </Col>
          <Col className="gutter-box" span={8}>
            <Button onClick={onSaveName} block type="primary">
              Save Name
            </Button>
          </Col>
        </Row>
        <Row gutter={10}>
          <Col className="gutter-box" span={16}>
            <Input.Password
              defaultValue={userStore.user.password}
              placeholder="Password"
              onInput={onChangePassword}
            />
          </Col>
          <Col className="gutter-box" span={8}>
            <Button onClick={onSavePassword} type="primary" block>
              Save Password
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Profile;
