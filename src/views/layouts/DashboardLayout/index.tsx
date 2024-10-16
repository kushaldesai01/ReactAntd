import { Outlet, useNavigate } from "react-router-dom";
import { app_path } from "../../../variables/appPath";
import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { Layout, theme } from "antd";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

const DashboardLayout: React.FC = () => {
  const navigate = useNavigate();
  const token = Cookies.get("token");
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  useEffect(() => {
    if (!token) {
      navigate(app_path.root);
    }
  }, [navigate, token]);
  

  return (
    <>
      <div style={{ width: "100%", height: "100vh", display: "flex" }}>
        <Layout>
          <Sidebar />
          <Layout>
            <Header colorBgContainer={colorBgContainer} />
            <Layout.Content
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              <Outlet />
            </Layout.Content>
          </Layout>
        </Layout>
      </div>
    </>
  );
};

export default DashboardLayout;
