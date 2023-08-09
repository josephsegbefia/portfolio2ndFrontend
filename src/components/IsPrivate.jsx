import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Navigate } from "react-router-dom";

function IsPrivate({ children }) {
  const { isAdminLoggedIn, isLoading } = useContext(AuthContext);

  if (isLoading) return <p>Loading... </p>;

  if (!isAdminLoggedIn) {
    // If the user is not logged in
    return <Navigate to="/login" />;
  } else {
    // If the user is logged in, allow to see the page
    return children;
  }
}

export default IsPrivate;
