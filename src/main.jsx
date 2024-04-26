import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routers from "./Routes/routers";
import AuthProvider from "./Providers/AuthPorvider";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={routers}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
