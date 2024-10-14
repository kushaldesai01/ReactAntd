import React from "react";
import { Form, Input, Button } from "antd";
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
      <Form.Item label="Email" name="email" rules={[{ required: true, message: "Please input your email!" }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Password" name="password" rules={[{ required: true, message: "Please input your password!" }]}>
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
