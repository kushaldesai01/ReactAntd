import React from "react";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

const NotFoundError: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you are looking for does not exist."
        extra={
          <Button
            onClick={() => {
              navigate(-1);
            }}
            style={{
              borderRadius: "10px",
              padding: "10px",
              fontSize: "16px",
              backgroundColor: "black",
              color: "white",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Go back
          </Button>
        }
      />
    </>
  );
};

export default NotFoundError;
