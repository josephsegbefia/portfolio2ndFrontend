import React from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/elorm.jpeg";
import { FaLinkedin, FaGithub, FaTwitter, FaPhone } from "react-icons/fa";

const Home = () => {
  const profile = {
    firstName: "Joseph",
    lastName: "Segbefia",
    headLine: "Full Stack Developer",
    email: "elsegbefia@gmail.com",
    phone: "+491636966417",
    avatarUrl: "",
    skills: [
      "JavaScript (ES6/7)",
      "NodeJS",
      "ExpressJS",
      "ReactJS",
      "MongoDB",
      "HTML",
      "CSS",
      "Python",
      "Machine Learning",
      "Data Analysis"
    ],
    linkedInUrl: "https://www.linkedin.com/in/joseph-segbefia",
    gitHubUrl: "https://github.com/josephsegbefia"
  };

  const services = [
    {
      id: 1,
      image: web,
      title: "Web Development"
    },
    {
      id: 2,
      image: commerce,
      title: "Data Science"
    },
    {
      id: 3,
      image: mobile,
      title: "Mobile Development"
    }
  ];
  return (
    <section className="min-h-screen flex flex-col justify-start items-center p-4 text-center mt-40">
      <h2 className="text-5xl text-tomato-600 font-bold uppercase">
        Joseph Segbefia
      </h2>
      <h3 className="py-3 text-2xl">{profile.headLine}</h3>
      <p className="max-w-xl font-light text-gray-500 dark:text-white">
        Hello, you are warmly welcome to my portfolio. I am a full stack
        developer, based in Berlin, Germany. I do web development, and mobile
        development.
      </p>
      <div className="flex text-gray-500 dark:text-white justify-evenly py-8 lg:py-16  text-3xl w-full md:w-1/3">
        <a
          href={profile.linkedInUrl}
          className="cursor-pointer duration-300 hover:text-rose-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href={profile.gitHubUrl}
          className="cursor-pointer duration-300 hover:text-rose-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href={""}
          className="cursor-pointer duration-300 hover:text-rose-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
      </div>
      <div>
        <img
          src={avatar}
          alt="avatar"
          className="w-80 h-80 md:w-92 md:h-92 rounded-full"
        />
      </div>
      <h3 className="py-3 text-2xl mt-5">Skills:</h3>
      <div className="justify-center grid gap-4 lg:gap-3 lg:grid-cols-5 mt-5 md:grid-cols-3 sm:grid-cols-2">
        {profile.skills.map((skill, index) => (
          <p
            className="text-gray-900 dark:bg-teal-600 bg-rose-600 rounded-md p-1.5 dark:text-white"
            key={index}
          >
            {skill}
          </p>
        ))}
      </div>
      <div className="grid gap-10 lg:grid-cols-3"></div>
    </section>
  );
};

export default Home;
