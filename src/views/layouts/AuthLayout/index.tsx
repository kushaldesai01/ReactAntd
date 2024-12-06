import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { app_path } from "../../../variables/appPath";
import Cookies from "js-cookie";
import { Layout } from "antd";
import logo from "../../../assets/seaside_tennis_court_by_streponko_dhmdc67-fullview.jpg";

const AuthLayout: React.FC = () => {
  const navigate = useNavigate();
  const token = Cookies.get("token");

  useEffect(() => {
    if (token) {
      navigate(app_path.dashboard.root);
    }
  }, [navigate, token]);

  return (
    <Layout style={{ height: "100vh" }}>
      {/* <Layout.Header
        style={{
          backgroundColor: "white",
          textAlign: "center",
          height: "64px",
          position: "fixed",
          width: "100%",
          zIndex: 1,
        }}
      >
        Header
      </Layout.Header> */}
      <Layout>
        <Layout.Sider
          width="55%"
          style={{
            textAlign: "center",
            backgroundColor: "white",
          }}
        >
          <img
            src={logo}
            style={{
              height: "100%", // Use full height of the Sider
              width: "110%", // Use full width of the Sider
              objectFit: "cover", // Ensure the image covers the Sider without distortion
              // borderRadius: "20px",
            }}
            alt="Sider Image"
          />
        </Layout.Sider>
        <Layout.Content
          style={{
            height: "100vh",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: "20px",
            zIndex: 1,
          }}
        >
          <div
            style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}
          >
            <Outlet />
          </div>
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

export default AuthLayout;
