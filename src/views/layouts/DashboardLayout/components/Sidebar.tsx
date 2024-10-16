import { Layout, Menu } from "antd";
import React, { useState } from "react";
import { PieChartOutlined, UserOutlined, DesktopOutlined, FileOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import logo from "../../../../assets/tennis-court.png";
import { useNavigate } from "react-router-dom";

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const items: MenuProps["items"] = [
    {
      key: 1,
      icon: <PieChartOutlined />,
      label: "Item 1",
      onClick: () => {
        navigate("/dashboard/item1");
      },
    },
    {
      key: 2,
      icon: <UserOutlined />,
      label: "Item 2",
      children: [
        {
          key: 2.1,
          icon: <UserOutlined />,
          label: "Item 2.1",
        },
        {
          key: 2.2,
          icon: <DesktopOutlined />,
          label: "Item 2.2",
        },
        {
          key: 2.3,
          icon: <FileOutlined />,
          label: "Item 2.3",
        },
      ],
    },
  ];

  return (
    <>
      <Layout.Sider width={"18%"} trigger={null} collapsible collapsed={collapsed}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "64px", // Adjust height as needed
            marginBottom: "16px", // Space between logo and menu
          }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{ cursor: "pointer", maxHeight: "100%", maxWidth: "100%" }}
            onClick={() => setCollapsed(!collapsed)}
          />
        </div>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline" items={items} />
      </Layout.Sider>
    </>
  );
};

export default Sidebar;
