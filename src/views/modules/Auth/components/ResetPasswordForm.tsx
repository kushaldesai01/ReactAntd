import React from "react";
import { Form, Button, Row, Col } from "antd";
import { resetPasswordAPI } from "../utilities/authAPI";
import { useNavigate } from "react-router-dom";
import { app_path } from "../../../../variables/appPath";
import PasswordInput from "../../../../components/form/inputs/PasswordInput";

const ResetPasswordForm: React.FC = () => {
  const navigate = useNavigate();
  const onSubmit = (values: any) => {
    resetPasswordAPI(values)
      .then((res) => {
        console.log(res);
        navigate(app_path.auth.login);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Form layout="vertical" onFinish={onSubmit} style={{ maxWidth: "50%" }}>
      <Row>
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
            Reset password
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default ResetPasswordForm;
