import { Button, Card, Col, Form, Input, Row } from "antd";
import { useState } from "react";

const Profile = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const onChangeName = (e: any) => {
    setName(e.target.value);
  };
  const onChangePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const onSaveName = () => {
    console.log(name);
  };
  const onSavePassword = () => {
    console.log(password);
  };

  return (
    <div className="profile-container">
      <Card style={{ width: 400 }}>
        <h1>Change Profile</h1>
        <Row gutter={10}>
          <Col className="gutter-box" span={16}>
            <Input onInput={onChangeName} />
          </Col>
          <Col className="gutter-box" span={8}>
            <Button onClick={onSaveName} block type="primary">
              Save Name
            </Button>
          </Col>
        </Row>
        <Row gutter={10}>
          <Col className="gutter-box" span={16}>
            <Input.Password onInput={onChangePassword} />
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
