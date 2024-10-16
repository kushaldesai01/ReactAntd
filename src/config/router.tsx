import { createBrowserRouter } from "react-router-dom";
import LoginForm from "../views/modules/Auth/components/LoginForm";
import SignupForm from "../views/modules/Auth/components/SignupForm";
import Dashboard from "../views/modules/Dashboard";
import { app_path } from "../variables/appPath";
import AuthLayout from "../views/layouts/AuthLayout";
import DashboardLayout from "../views/layouts/DashboardLayout";

const router = createBrowserRouter([
  {
    // path: app_path.root,
    element: <AuthLayout />,
    children: [
      {
        path: app_path.root,
        element: <LoginForm />
      },
      {
        path: app_path.auth.login,
        element: <LoginForm />
      },
      {
        path: app_path.auth.signup,
        element: <SignupForm />
      },
    ]
  },
  {
    // path: app_path.dashboard.root,
    element: <DashboardLayout />,
    children: [
      {
        path: app_path.dashboard.root,
        element: <Dashboard />
      },
    ]
  },
]);

export default router;