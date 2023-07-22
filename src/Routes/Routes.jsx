import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Details from "../Pages/Details/Details";
import Admission from "../Pages/Admission/Admission";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'details',
          element: <Details></Details>
        },
        {
          path: 'admission',
          element: <Admission></Admission>
        }
      ]
    },
  ]);