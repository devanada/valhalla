import { Navigate, Outlet, useLocation } from "react-router-dom";

import { useAuthStore } from "@/utils/states";

const ProtectedRoutes = () => {
  const { pathname } = useLocation();
  const token = useAuthStore((state) => state.token);

  const authProtected = ["/login", "/register"];
  const protectedByToken = ["/"];

  if (authProtected.includes(pathname)) {
    if (token) return <Navigate to="/" />;
  }

  if (protectedByToken.includes(pathname)) {
    if (!token) return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
