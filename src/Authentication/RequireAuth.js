import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hook/useAuth";

const RequireAuth = ({ children, ...rest }) => {
  const { loggedInUser, isLoading } = useAuth();

  let location = useLocation();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (loggedInUser?.email) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} />;
};

export default RequireAuth;
