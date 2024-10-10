import { Navigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";

export const PrivateRoutes = () => {
  // Check if the token exists in local storage
  const token = localStorage.getItem("token");

  // If there is no token, show a toast and redirect the user to login
  if (!token) {
    toast.error("You must be logged in to access this page!");
    return <Navigate to="/login" />;
  }

  // If there is a token, it shows the protected content
  return <Outlet />;
};
