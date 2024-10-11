import { createBrowserRouter } from "react-router-dom";
import Auth from "../views/modules/Auth";
import LoginForm from "../views/modules/Auth/components/LoginForm";
import SignupForm from "../views/modules/Auth/components/SignupForm";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Auth />,
  },
  {
    path: '/login',
    element: <LoginForm />,
  },
  {
    path: '/signup',
    element: <SignupForm />,
  },
]);

export default router;