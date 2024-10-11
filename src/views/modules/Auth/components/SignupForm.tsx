import React from "react";
import { Form, Input, Button } from "antd";
import { signup } from "../utilities/AuthAPI";

const SignupForm: React.FC = () => {
  const onSubmit = (values: any) => {
    signup(values)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Form name="signup" onFinish={onSubmit}>
      <Form.Item label="Name" name="name" rules={[{ required: true, message: "Please input your name!" }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Email" name="email" rules={[{ required: true, message: "Please input your email!" }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Password" name="password" rules={[{ required: true, message: "Please input your password!" }]}>
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Confirm password"
        name="confirm_password"
        rules={[{ required: true, message: "Please input your confirm password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Sign up
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignupForm;
