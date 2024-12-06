import React from "react";
import { Form, Button, Row, Col } from "antd";
import { login } from "../utilities/authAPI";
import { useNavigate } from "react-router-dom";
import { app_path } from "../../../../variables/appPath";
import TextInput from "../../../../components/form/inputs/TextInput";
import PasswordInput from "../../../../components/form/inputs/PasswordInput";
import { Link } from "react-router-dom";
import { GoogleOutlined } from "@ant-design/icons";

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
    <>
      <Form layout="vertical" onFinish={onSubmit} style={{ maxWidth: "50%" }}>
        <Row>
          <Col lg={24}>
            <TextInput
              label="Email"
              name="email"
              placeholder="Enter email"
              rules={[{ required: true, message: "Please input your email!" }]}
            />
          </Col>
          <Col lg={24}>
            <PasswordInput
              label="Password"
              name="password"
              placeholder="Enter password"
              rules={[{ required: true, message: "Please input your password!" }]}
            />
          </Col>
          <Col lg={24}>
            <Link to={app_path.auth.forgot_password}>Forgot Password?</Link>
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
              Login
            </Button>
          </Col>
          <hr />
          <Col lg={24}>
            <Button
              onClick={() => {
                navigate(app_path.auth.signup);
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
              Don't have an account?
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
    </>
  );
};

export default LoginForm;
