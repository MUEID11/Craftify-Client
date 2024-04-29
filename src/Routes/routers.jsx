import { createBrowserRouter } from "react-router-dom";

import Login from "../Pages/Login";
import App from "../App";
import ErrorPage from "../Pages/ErrorPage";
import AddCraftItem from "../Pages/AddCraftItem";
import PrivateRoute from "./PrivateRoute";
import MyCrafts from "../Pages/MyCrafts";
import Register from "../Pages/Register";
import Home from "../Pages/Home";
import AllCrafts from "../Pages/AllCrafts";
import Details from "../Components/Details";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import SubCategories from "../Pages/SubCategories";
import MyItem from "../Pages/MyItem";
import UpdateItem from "../Pages/UpdateItem";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register/>
      },
      {
        path: "/addcraft",
        element: <PrivateRoute><AddCraftItem/></PrivateRoute>
      },
      {
        path: '/myart',
        element: <PrivateRoute><MyCrafts/></PrivateRoute>
      },
      {
        path: '/deleteCraft/:id',
        element: <PrivateRoute><MyItem/></PrivateRoute>
      },
      {
        path: '/updateCraft/:id',
        element: <PrivateRoute><UpdateItem/></PrivateRoute>,
      },
      {
        path: "/allart",
        element: <AllCrafts></AllCrafts>,
      },
      {
        path: "/details/:id",
        element: <PrivateRoute><Details/></PrivateRoute>,
      },
      {
        path: "/contacts",
        element: <Contact></Contact>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path:'/cat/:id',
        element: <SubCategories></SubCategories>
      },
      {
        path: "/cat/details/:id",
        element: <PrivateRoute><Details/></PrivateRoute>,
      },
    ],
  },
]);

export default routers;
