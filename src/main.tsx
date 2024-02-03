import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import Host from "./routes/host";
import Join from "./routes/join";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "host",
    element: <Host />,
  },
  {
    path: "join",
    element: <Join />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
