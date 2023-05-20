import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Home/Home/Home";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";
import PrivetRoute from "./PrivetRoute";
import MyToyes from "../page/MyToyes/MyToyes";
import Blog from "../page/Blog/Blog";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [
        {
            path : "/",
            element : <Home></Home>
        },
        {
            path : "/login",
            element : <Login></Login>
        },
        {
          path : "/register",
          element : <Register></Register>
        },
        {
          path : "/myToyes",
          element : <MyToyes></MyToyes>
        },
        {
          path : "/blog",
          element : <Blog></Blog>
        }
      ]
    },
  ]);

  export default router