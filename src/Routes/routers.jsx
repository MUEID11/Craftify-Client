import { createBrowserRouter } from "react-router-dom";

import Login from "../Pages/Login";
import App from "../App";
import Register from "../Pages/Register";
import ErrorPage from "../Pages/ErrorPage";
import AddCraftItem from "../Pages/AddCraftItem";

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
        element: <Register></Register>
      },
      {
        path: '/addcraft',
        element:<AddCraftItem></AddCraftItem>
      }
    ],
  },
]);

export default routers;
