import React from "react";
import { Form, Button, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import { app_path } from "../../../../variables/appPath";
import TextInput from "../../../../components/form/inputs/TextInput";
import { Link } from "react-router-dom";
import { forgotPasswordAPI } from "../utilities/authAPI";

const ForgotPasswordForm: React.FC = () => {
  const navigate = useNavigate();

  const onSubmit = (values: any) => {
    forgotPasswordAPI(values)
      .then((res) => {
        console.log(res);
        navigate(app_path.auth.reset_password);
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
              Send link
            </Button>
          </Col>
          <Col lg={24}>
            <Link to={app_path.auth.login}>Back to login</Link>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default ForgotPasswordForm;
