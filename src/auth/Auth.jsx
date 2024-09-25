import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

export const Auth = ({ children }) => {
  const { user, setUser } = useUser();

  return user?._id ? children : <Navigate to="/" replace />;
};