import React from "react";
import { Form, Input } from "antd";

interface props {
  label?: string;
  name?: string;
  rules?: Array<any>;
  placeholder?: string;
}

const PasswordInput: React.FC<props> = ({ label, name, rules, placeholder }) => {
  return (
    <>
      <Form.Item
        label={<span style={{ fontWeight: "bold" }}>{label}</span>}
        name={name}
        rules={rules}
        style={{ color: "#000" }}
      >
        <Input.Password
          placeholder={placeholder}
          style={{
            border: "1px solid",
            borderRadius: "10px",
            padding: "10px",
            fontSize: "16px",
            backgroundColor: "#fff",
            color: "#000",
          }}
        />
      </Form.Item>
    </>
  );
};

export default PasswordInput;
