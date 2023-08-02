import React, { useState, useEffect } from "react";
import axios from "axios";
const API_URL = "http://localhost:1337";

const AuthContext = React.createContext();

function AuthProviderWrapper(props) {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(null);

  const storeToken = (token) => {
    localStorage.setItem("authToken", token);
  };

  const authenticateAdmin = () => {
    const storedToken = localStorage.getItem("authToken");

    if (storedToken) {
      axios
        .get(`${API_URL}/verify`, {
          headers: { Authorization: `Bearer ${storedToken}` }
        })
        .then((response) => {
          const admin = response.data;
          setIsAdminLoggedIn(true);
          setIsLoading(false);
          setAdmin(admin);
        })
        .catch((error) => {
          setIsAdminLoggedIn(false);
          setIsLoading(false);
          setAdmin(null);
        });
    } else {
      setIsAdminLoggedIn(false);
      setIsLoading(false);
      setAdmin(null);
    }
  };

  const removeToken = () => {
    localStorage.removeItem("authToken");
  };

  const logOutAdmin = () => {
    removeToken();
    authenticateAdmin();
  };

  useEffect(() => {
    authenticateAdmin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAdminLoggedIn,
        isLoading,
        admin,
        storeToken,
        authenticateAdmin,
        logOutAdmin
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthProviderWrapper, AuthContext };
