import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

const Footer = () => {
  const { isAdminLoggedIn, user, logOutUser } = useContext(AuthContext);
  return (
    <section className="min-h-fit flex flex-col justify-start items-center py-16 px-5 text-center">
      <p className="max-w-xl font-light text">
        © 2023 Joseph Segbefia | Software Engineer | Data Scientist | Marine
        Engineer
      </p>
      {isAdminLoggedIn && (
        <>
          <Link
            onClick={logOutUser}
            to={"/"}
            className="max-w-xl font-light text"
          >
            Logout
          </Link>
        </>
      )}

      {isAdminLoggedIn && (
        <>
          <Link
            // onClick={logOutUser}
            to={"/dashboard"}
            className="max-w-xl font-light text"
          >
            Dashboard
          </Link>
        </>
      )}

      <br />
      <br />

      {!isAdminLoggedIn && (
        <>
          <Link to={"/login"} className="max-w-xl font-light text">
            Admin Log In
          </Link>
        </>
      )}
    </section>
  );
};

export default Footer;
