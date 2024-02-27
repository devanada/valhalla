import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ProtectedRoutes from "@/routes/protected-routes";
import Index from "@/pages";
import Login from "@/pages/login";
import Register from "@/pages/register";

export const router = createBrowserRouter([
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/",
        element: <Index />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
