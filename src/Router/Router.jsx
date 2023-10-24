import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Service from "../Pages/Service";
import Blog from "../Pages/Blog";
import Content from "../Pages/Content";
import SignUp from "../Pages/SignUp";
import SignIn from "../Pages/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/service",
        element: <Service></Service>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/content",
        element: <Content></Content>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/Signin",
        element: <SignIn></SignIn>,
      },
    ],
  },
]);

export default router;
