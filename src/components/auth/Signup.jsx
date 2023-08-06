import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5005";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const navigate = useNavigate();

  const handleEmail = (event) => setEmail(event.target.value);
  const handlePassword = (event) => setPassword(event.target.value);
  const handleFirstName = (event) => setFirstName(event.target.value);
  const handleLastName = (event) => setLastName(event.target.value);

  const handleSignupSubmit = (event) => {
    event.preventDefault();

    const requestBody = { firstName, lastName, email, password };

    axios
      .post(`${API_URL}/auth/signup`, requestBody)
      .then((response) => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="p-8 text-left w-full h-full">
      <form onSubmit={handleSignupSubmit}>
        <div className="gap-4 w-full mt-80">
          <div className="flex flex-col my-2">
            <label className="capitalize text-sm py-2 font-extralight">
              First Name
            </label>
            <input
              type="text"
              name="firstname"
              className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
              onChange={handleFirstName}
            />
          </div>
          <div className="flex flex-col my-2">
            <label className="capitalize text-sm py-2 font-extralight">
              Last Name
            </label>
            <input
              type="text"
              name="lastname"
              className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
              onChange={handleLastName}
            />
          </div>
          <div className="flex flex-col my-2">
            <label className="capitalize text-sm py-2 font-extralight">
              Email
            </label>
            <input
              type="text"
              name="email"
              className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
              onChange={handleEmail}
            />
          </div>
          <div className="flex flex-col my-2">
            <label className="capitalize text-sm py-2 font-extralight">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
              onChange={handlePassword}
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="my-8 font-bold uppercase rounded-md cursor-pointer"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
