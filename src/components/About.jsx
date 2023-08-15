import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const API_URL = "http://localhost:5005";

const About = () => {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/profile`)
      .then((response) => {
        setProfile(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      {profile[0] ? (
        <div>
          <section className="flex flex-col justify-start items-center p-4 text-center">
            <h2 className="text-5xl font-bold uppercase">Joseph Segbefia</h2>
            <h3 className="py-3 text-2xl">{profile[0].headLine}</h3>

            <div className="flex text-gray-500 dark:text-white justify-evenly py-8 lg:py-16  text-3xl w-full md:w-1/3">
              <a
                href={profile[0].linkedInURL}
                className="cursor-pointer duration-300 hover:text-rose-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href={profile[0].gitHubURL}
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
            <h3 className="text-2xl font-bold uppercase text-center mt-20">
              About Me
            </h3>
            <br />
            <p className=" font-light text-gray-500 dark:text-white">
              I am a skilled professional with a background in marine
              engineering, data science and machine learning. I have developed a
              unique set of skills that enable me to solve complex problems,
              analyse data, and write clean, efficient code, because of my
              diverse background. I recently completed an intensive bootcamp in
              web development and I am eager, and passionate about leveraging my
              expertise to create innovative web solutions that drive business
              success. With my strong attention to detail, I strive deliver
              high-quality work that meets and exceeds client expectation. My
              goal is to make a positive impact in the web development industry
              by pushing the boundaries of what is possible.
            </p>
            <br />
          </section>
          <h3 className="text-2xl font-bold uppercase  text-center mt-20">
            My Journey through time
          </h3>
          <br />
          <section className="flex flex-col justify-start p-6">
            <ol className="relative border-l border-gray-200 dark:border-gray-700 p-4">
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  May 2023 - July 2023
                </time>
                <h3 className="text-lg font-semibold">Ironhack, Berlin</h3>
                <h5 className="font-semibold text-gray-500 dark:text-gray-500">
                  Full Stack Web Development
                </h5>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  9-week intensive web development boot camp. <br />
                  - Frontend technologies learned: HTML, CSS, JavaScript (ES6),
                  ReactJS <br />- Backend technologies learned: ExpressJS,
                  NodeJS, MongoDB, Axios <br />
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
              <br />
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  May 2022 - Present
                </time>
                <h3 className="text-lg font-semibold">
                  Hive Technologies GmbH, Rangsdorf
                </h3>
                <h5 className="font-semibold text-gray-500 dark:text-gray-500">
                  Operations Assistant
                </h5>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  - Identifying operational requirements and opportunities for
                  improvement. <br />
                  - Determining appropriate methods to analyze
                  operations,relevant information, and data. <br />- Developing
                  new processes and procedures to enhance operations. <br />-
                  Using data to understand client needs and ensuring they are
                  met
                </p>

                <h6 className="text-lg font-semibold text-gray-500 dark:text-gray-500">
                  Skills
                </h6>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  MetaBase · Time Management · Multitasking · Communication ·
                  Data Analysis
                </p>
              </li>
              <br />
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  October 2020 - October 2021
                </time>
                <h3 className="text-lg font-semibold">
                  University of Law, GISMA Business School Campus, Berlin
                </h3>
                <h5 className="font-semibold text-gray-500 dark:text-gray-500">
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
              <br />
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  November 2020 - November 2021
                </time>
                <h3 className="text-lg font-semibold">Codecademy</h3>
                <h5 className="font-semibold text-gray-500 dark:text-gray-500">
                  Full-stack Engineer Path
                </h5>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  - Learned to build web applications from start to finish.{" "}
                  <br />- Started with the front-end, moved to the back-end,
                  then connected the two.
                </p>

                <h6 className="text-lg font-semibold text-gray-500 dark:text-gray-500">
                  Skills
                </h6>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  HTML · CSS · Databases · React.js · Node.js · Express.js ·
                  Redux · Version Control · MongoDB · APIs
                </p>
              </li>
              <br />
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  September 2019 - October 2020
                </time>
                <h3 className="text-lg font-semibold">DataCamp</h3>
                <h5 className="font-semibold text-gray-500 dark:text-gray-500">
                  Data Scientist with Python
                </h5>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  - Learned how to use python to import, clean, manipulate, and
                  visualize data. <br />
                  - Through interactive exercises, got hands-on with some of the
                  most popular Python libraries, including pandas, NumPy,
                  Matplotlib, and many more. <br />- Worked with real-world
                  datasets to learn the statistical and machine learning
                  techniques needed to train decision trees and use natural
                  language processing (NLP)
                </p>

                <h6 className="text-lg font-semibold text-gray-500 dark:text-gray-500">
                  Skills
                </h6>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Python · NumPy · Pandas · Matplotlib · Seaborn · Scikit-Learn
                  · SQL
                </p>
              </li>
            </ol>

            <div className="min-w-fit p-4 flex flex-col justify-start items-center py-16 px-5 text-center shadow-lg dark:shadow-gray-100 rounded-xl duration-300 mt-20 ease-in-out hover:scale-110">
              <h5 className="mb-2 text-3xl font-bold">View some of my works</h5>
              <p className="mb-5 text-base">
                Please take some time to have a look at some of my projects.
                Mostly built with the MERN stack. I also have a few data science
                projects in there as well
              </p>
              <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                <Link
                  to="/portfolio"
                  className="w-full sm:w-auto  hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                >
                  <div className="text-left">
                    <div className="mb-1 text-xs text-center">See some of</div>
                    <div className="-mt-1 font-sans text-sm font-semibold text-center">
                      my Projects
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default About;
