import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Homepage from 'pages/Homepage';

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>,
  },
   {
     path: "details/:id",
     element: <div>...</div>
   }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);