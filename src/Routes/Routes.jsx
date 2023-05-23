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
import ToyDetails from "../Home/Categories/ToyDetails";
import AddAToy from "../page/AddAToy/AddAToy";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import AllToyes from "../page/AllToyes/AllToyes";
import ViewDetails from "../components/AllToyCard/ViewDetails";


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
          path : "allToyes",
          element : <AllToyes></AllToyes>
        },
        {
          path : "/myToyes",
          element : <PrivetRoute><MyToyes></MyToyes></PrivetRoute>
        },
        {
          path : "/addAToy",
          element : <PrivetRoute><AddAToy></AddAToy></PrivetRoute>
        },
        {
          path : "/blog",
          element : <Blog></Blog>
        },
        {
          path : "/toyDetails/:id",
          element : <ToyDetails></ToyDetails>,
          loader : ({params}) => fetch(`https://toy-joy-server-six.vercel.app/games/${params.id}`)
        },
        {
          path : "/viewDetails/:id",
          element : <PrivetRoute><ViewDetails></ViewDetails></PrivetRoute>,
          loader : ({params}) => fetch(`https://toy-joy-server-six.vercel.app/allToyes/${params.id}`)
        }
      ]
      
    },
    {
      path : "*",
      element : <ErrorPage></ErrorPage>
    }
  ]);

  export default router