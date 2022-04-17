import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase-init";
import toast from "react-hot-toast";
const RequiredAuth = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const location = useLocation();
  if (!user) {
    return <Navigate to="/sign_in" state={{ from: location }} replace />;
  }
  if (loading) {
    return toast.loading("Waiting...");
  }
  if (error) {
    return toast.error("This is an error!");
  }
  return children;
};

export default RequiredAuth;
