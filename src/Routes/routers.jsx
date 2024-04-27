import { createBrowserRouter } from "react-router-dom";

import Login from "../Pages/Login";
import App from "../App";
import ErrorPage from "../Pages/ErrorPage";
import AddCraftItem from "../Pages/AddCraftItem";
import PrivateRoute from "./PrivateRoute";
import MyCrafts from "../Pages/MyCrafts";
import Register from "../Pages/Register";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage/>,
    children: [
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
        path: '/allcraft',
        element: <h2>all craft items</h2>
      }

    ],
  },
]);

export default routers;
