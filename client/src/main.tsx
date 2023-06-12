import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import ErrorPage from "./routes/ErrorPage.tsx";
import Dashboard from "./components/Dashboard/Dashboard.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Home from "./routes/Home.tsx";
import Profile from "./components/Profile/Profile.tsx";
import Form from "./components/Form/Form.tsx";
import MyList from "./components/MyList/MyList.tsx";

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
  {
    path: "/app/dashboard/",
    element: <Dashboard />,
    children: [
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "create",
        element: <Form />,
      },
      {
        path: "myList",
        element: <MyList />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
