import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import ErrorPage from "./routes/ErrorPage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Home from "./routes/Home.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Home />,
  },
  {
    path: "/app",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
