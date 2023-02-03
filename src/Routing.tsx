import { createBrowserRouter } from "react-router-dom";
import App from "./pages/Home";
import Login from "./pages/Login";
import Rate from "./pages/Rate";
import SignUp from "./pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/rate",
    element: <Rate />,
  },
]);

export default router;
