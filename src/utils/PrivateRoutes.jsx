import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoutes = () => {
  // Check if the token exists in local storage
  const token = localStorage.getItem("token");

  // If there is no token, it redirects the user to the login
  if (!token) {
    return <Navigate to="/login" />;
  }

  // If there is a token, it shows the protected content
  return <Outlet />;
};
