import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="min-h-fit flex flex-col justify-start items-center py-16 px-5 text-center">
      <p className="max-w-xl font-light text">
        © 2023 Joseph Segbefia | Software Engineer | Data Scientist | Marine
        Engineer
      </p>
      <Link to={"/login"} className="max-w-xl font-light text">
        Admin Login
      </Link>
    </section>
  );
};

export default Footer;
