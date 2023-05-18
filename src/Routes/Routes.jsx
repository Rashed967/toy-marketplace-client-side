import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Home/Home/Home";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";


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
        }
      ]
    },
  ]);

  export default router