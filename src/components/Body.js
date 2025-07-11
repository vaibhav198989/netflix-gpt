import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
const Body = () => {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/browse", element: <Browse /> },
    { path: "/login", element: <Login /> },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
