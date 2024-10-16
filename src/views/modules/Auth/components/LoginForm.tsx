import React from "react";
import { Form, Input, Button, Row, Col } from "antd";
import { login } from "../utilities/AuthAPI";
import { useNavigate } from "react-router-dom";
import { app_path } from "../../../../variables/appPath";

const LoginForm: React.FC = () => {
  const navigate = useNavigate();

  const onSubmit = (values: any) => {
    login(values)
      .then((res) => {
        console.log(res);
        navigate(app_path.dashboard.root);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Form name="signup" onFinish={onSubmit}>
      <Row gutter={[20, 4]}>
        <Col lg={24}>
          <Form.Item label="Email" name="email" rules={[{ required: true, message: "Please input your email!" }]}>
            <Input />
          </Form.Item>
        </Col>
        <Col lg={24}>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
        </Col>
        <Col lg={24}>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default LoginForm;
