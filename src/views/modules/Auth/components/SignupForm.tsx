import React from "react";
import { Form, Button, Row, Col } from "antd";
import { signup } from "../utilities/authAPI";
import { useNavigate } from "react-router-dom";
import { app_path } from "../../../../variables/appPath";
import TextInput from "../../../../components/form/inputs/TextInput";
import PasswordInput from "../../../../components/form/inputs/PasswordInput";
import { GoogleOutlined } from "@ant-design/icons";

const SignupForm: React.FC = () => {
  const navigate = useNavigate();
  const onSubmit = (values: any) => {
    signup(values)
      .then((res) => {
        console.log(res);
        navigate(app_path.dashboard.root);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Form layout="vertical" onFinish={onSubmit} style={{ maxWidth: "50%" }}>
      <Row>
        <Col lg={24}>
          <TextInput label="Name" name="name" rules={[{ required: true, message: "Please input your name!" }]} />
        </Col>
        <Col lg={24}>
          <TextInput label="Email" name="email" rules={[{ required: true, message: "Please input your email!" }]} />
        </Col>
        <Col lg={24}>
          <PasswordInput
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          />
        </Col>
        <Col lg={24}>
          <PasswordInput
            label="Confirm password"
            name="confirm_password"
            rules={[{ required: true, message: "Please input your confirm password!" }]}
          />
        </Col>
        <Col lg={24}>
          <Button
            type="primary"
            htmlType="submit"
            style={{
              borderRadius: "10px",
              padding: "10px",
              fontSize: "16px",
              backgroundColor: "black",
              color: "white",
              width: "100%",
              height: "100%",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Sign up
          </Button>
        </Col>
        <hr />
          <Col lg={24}>
            <Button
              onClick={() => {
                navigate(app_path.auth.login);
              }}
              style={{
                borderRadius: "10px",
                padding: "10px",
                fontSize: "16px",
                backgroundColor: "black",
                color: "white",
                width: "100%",
                height: "100%",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Already have an account?
            </Button>
          </Col>
          <Col lg={24}>
            <Button
              icon={<GoogleOutlined />}
              style={{
                borderRadius: "10px",
                padding: "10px",
                fontSize: "16px",
                backgroundColor: "black",
                color: "white",
                width: "100%",
                height: "100%",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Conitue with google
            </Button>
          </Col>
      </Row>
    </Form>
  );
};

export default SignupForm;
