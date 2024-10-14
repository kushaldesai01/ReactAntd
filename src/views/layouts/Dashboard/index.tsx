import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { app_path } from "../../../variables/appPath";
import Cookies from "js-cookie";
import { Button } from "antd";

const DashboardLayout: React.FC = () => {
  const navigate = useNavigate();
  const token = Cookies.get("token");

  useEffect(() => {
    if (!token) {
      navigate(app_path.root);
    }
  }, [navigate, token]);

  return (
    <>
      <div>Dashboard Layout</div>
      <Button
        onClick={() => {
          Cookies.remove("token");
          navigate(app_path.root);
        }}
        title="logout"
      />
      <Outlet />
    </>
  );
};

export default DashboardLayout;
