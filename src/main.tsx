import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Dashbord from "./Components/Dashbord/Dashbord.tsx";
import Connexion from "./Components/Connexion/Connexion.tsx";
import Inscription from "./Components/Inscription/Inscription.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashbord />,
  },
  {
    path: "/connexion",
    element: <Connexion />,
  },
  {
    path: "/inscription",
    element: <Inscription />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
