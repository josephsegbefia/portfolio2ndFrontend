import React, { useState, useEffect } from "react";
import axios from "axios";
const API_URL = "https://serverportfolio.onrender.com";

const AuthContext = React.createContext();

function AuthProviderWrapper(props) {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  const storeToken = (token) => {
    localStorage.setItem("authToken", token);
  };

  const authenticateUser = () => {
    const storedToken = localStorage.getItem("authToken");

    if (storedToken) {
      axios
        .get(`${API_URL}/auth/verify`, {
          headers: { Authorization: `Bearer ${storedToken}` }
        })
        .then((response) => {
          const admin = response.data;
          setIsAdminLoggedIn(true);
          setIsLoading(false);
          setUser(admin);
        })
        .catch((error) => {
          setIsAdminLoggedIn(false);
          setIsLoading(false);
          setUser(null);
        });
    } else {
      setIsAdminLoggedIn(false);
      setIsLoading(false);
      setUser(null);
    }
  };

  const removeToken = () => {
    localStorage.removeItem("authToken");
  };

  const logOutUser = () => {
    removeToken();
    authenticateUser();
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAdminLoggedIn,
        isLoading,
        user,
        storeToken,
        authenticateUser,
        logOutUser
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthProviderWrapper, AuthContext };
