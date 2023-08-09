import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Navigate } from "react-router-dom";

function IsAnon({ children }) {
  const { isAdminLoggedIn, isLoading } = useContext(AuthContext);

  if (isLoading) return <p>Loading... </p>;

  if (isAdminLoggedIn) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
}

export default IsAnon;
