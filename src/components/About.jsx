import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaPhone } from "react-icons/fa";

const About = () => {
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
  return (
    <div className="min-h-screen">
      <section className="flex flex-col justify-start items-center p-4 text-center">
        <h2 className="text-5xl font-bold uppercase">Joseph Segbefia</h2>
        <h3 className="py-3 text-2xl">{profile.headLine}</h3>

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
      </section>
      <section className="flex flex-col justify-start items-center p-4">
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              May 2023 - July 2023
            </time>
            <h3 className="text-lg font-semibold">Ironhack, Berlin</h3>
            <h6 className="text-lg font-semibold text-gray-500 dark:text-gray-500">
              Intensive 9-week web development bootcamp
            </h6>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Get access to over 20+ pages including a dashboard layout, charts,
              kanban board, calendar, and pre-order E-commerce & Marketing
              pages.
            </p>
          </li>
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              March 2022
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Marketing UI design in Figma
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              All of the pages and components are first designed in Figma and we
              keep a parity between the two versions even as we update the
              project.
            </p>
          </li>
          <li className="ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              April 2022
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              E-Commerce UI code in Tailwind CSS
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Get started with dozens of web components and interactive elements
              built on top of Tailwind CSS.
            </p>
          </li>
        </ol>
      </section>
    </div>
  );
};

export default About;
