import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { app_path } from "../../../variables/appPath";
import Cookies from "js-cookie";

const AuthLayout: React.FC = () => {
  const navigate = useNavigate();
  const token = Cookies.get("token");

  useEffect(() => {
    if (token) {
      navigate(app_path.dashboard.root);
    }
  }, [navigate, token]);

  return (
    <>
      <div>Auth Layout</div>
      <Outlet />
    </>
  );
};

export default AuthLayout;
