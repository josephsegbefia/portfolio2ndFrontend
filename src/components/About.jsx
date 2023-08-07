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
            <h5 className="text-lg font-semibold text-gray-500 dark:text-gray-500">
              Full Stack Web Development
            </h5>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              9-week intensive web development boot camp. <br />
              - Frontend technologies learned: HTML, CSS, JavaScript (ES6),
              ReactJS <br />- Backend technologies learned: ExpressJS, NodeJS,
              MongoDB, Axios <br />
              -Version Control: Git | GitHub
            </p>
            <h6 className="text-lg font-semibold text-gray-500 dark:text-gray-500">
              Skills
            </h6>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              HTML5 · Cascading Style Sheets (CSS) · React.js · Express.js ·
              Node.js · MongoDB · JavaScript · Git/GitHub · REST APIs
            </p>
          </li>
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              May 2022 - Present
            </time>
            <h3 className="text-lg font-semibold">
              Hive Technologies GmbH, Rangsdorf
            </h3>
            <h5 className="text-lg font-semibold text-gray-500 dark:text-gray-500">
              Operations Assistant
            </h5>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              - Identifying operational requirements and opportunities for
              improvement. <br />
              - Determining appropriate methods to analyze operations,relevant
              information, and data. <br />- Developing new processes and
              procedures to enhance operations. <br />- Using data to understand
              client needs and ensuring they are met
            </p>

            <h6 className="text-lg font-semibold text-gray-500 dark:text-gray-500">
              Skills
            </h6>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              MetaBase · Time Management · Multitasking · Communication · Data
              Analysis
            </p>
          </li>
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              October 2020 - October 2021
            </time>
            <h3 className="text-lg font-semibold">
              University of Law, GISMA Business School Campus, Berlin
            </h3>
            <h5 className="text-lg font-semibold text-gray-500 dark:text-gray-500">
              MSc. Business Intelligence and Analytics
            </h5>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              A masters' degree course offered by the University of Law, but
              delivered at the GISMA Business School Campus, Berlin. <br />
              Course Work <br />
              - Data Discovery & Visualization <br />
              - Data Driven Decision Making <br />
              - Predictive Analytics <br />
              - Financial Technologies <br />
            </p>

            <h6 className="text-lg font-semibold text-gray-500 dark:text-gray-500">
              Skills
            </h6>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Python · Tableau · SQL
            </p>
          </li>
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              November 2020 - November 2021
            </time>
            <h3 className="text-lg font-semibold">Codecademy</h3>
            <h5 className="text-lg font-semibold text-gray-500 dark:text-gray-500">
              Full-stack Engineer Path
            </h5>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              - Learned to build web applications from start to finish. <br />-
              Started with the front-end, moved to the back-end, then connected
              the two.
            </p>

            <h6 className="text-lg font-semibold text-gray-500 dark:text-gray-500">
              Skills
            </h6>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              HTML · CSS · Databases · React.js · Node.js · Express.js · Redux ·
              Version Control · MongoDB · APIs
            </p>
          </li>
        </ol>
      </section>
    </div>
  );
};

export default About;
