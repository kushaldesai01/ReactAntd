import { createBrowserRouter } from "react-router-dom";
import Auth from "../views/modules/Auth";
import LoginForm from "../views/modules/Auth/components/LoginForm";
import SignupForm from "../views/modules/Auth/components/SignupForm";
import Dashboard from "../views/modules/Dashboard";
import { app_path } from "../variables/appPath";

const router = createBrowserRouter([
  {
    path: app_path.root,
    element: <Auth />,
  },
  {
    path: app_path.auth.login,
    element: <LoginForm />,
  },
  {
    path: app_path.auth.signup,
    element: <SignupForm />,
  },
  {
    path: app_path.dashboard.root,
    element: <Dashboard />,
  },
]);

export default router;