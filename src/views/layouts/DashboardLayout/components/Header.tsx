import React from "react";
import { Layout, Menu } from "antd";
import type { MenuProps } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { app_path } from "../../../../variables/appPath";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Header: React.FC<any> = ({ colorBgContainer }) => {
  const navigate = useNavigate();

  const items: MenuProps["items"] = [
    {
      key: 1,
      icon: <UserOutlined />,
      label: "User",
      onClick: () => {
        console.log("nav 1");
      },
      children: [
        {
          key: 1.1,
          label: "Profile",
          onClick: () => {
            navigate(app_path.dashboard.profile);
          },
        },
        {
          key: 1.2,
          label: "Logout",
          onClick: () => {
            Cookies.remove("token");
            navigate(app_path.root);
          },
        },
      ],
    },
  ];

  return (
    <>
      <Layout.Header style={{ padding: 0, background: colorBgContainer, display: "flex", justifyContent: "flex-end" }}>
        <Menu theme="light" mode="horizontal" items={items} style={{ minWidth: 0 }} />
      </Layout.Header>
    </>
  );
};

export default Header;
