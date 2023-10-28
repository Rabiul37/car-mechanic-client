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
import Booking from "../Pages/Booking";
import Mybooking from "../Pages/Mybooking";
import BookingPrivate from "../PrivateRoute/BookingPrivate";

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
      {
        path: "/checkout/:id",
        element: <Booking></Booking>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/Mybooking",
        element: (
          <BookingPrivate>
            <Mybooking></Mybooking>
          </BookingPrivate>
        ),
      },
    ],
  },
]);

export default router;
