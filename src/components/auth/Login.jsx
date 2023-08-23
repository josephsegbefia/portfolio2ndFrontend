import React from "react";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";

const API_URL = "https://portfolioserver-u082.onrender.com";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const requestBody = { email, password };

    axios
      .post(`${API_URL}/auth/login`, requestBody)
      .then((response) => {
        console.log("Token:", response.data.authToken);
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/portfolio");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="p-8 text-left w-full h-full">
      <form onSubmit={handleFormSubmit}>
        <div className="gap-4 w-full mt-80">
          <div className="flex flex-col my-2">
            <label className="capitalize text-sm py-2 font-extralight">
              email
            </label>
            <input
              type="text"
              name="email"
              className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
              onChange={handleEmailChange}
            />
          </div>
          <div className="flex flex-col my-2">
            <label className="capitalize text-sm py-2 font-extralight">
              password
            </label>
            <input
              type="password"
              name="password"
              className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
              onChange={handlePasswordChange}
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="my-8 font-bold uppercase rounded-md cursor-pointer"
          >
            Login In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
