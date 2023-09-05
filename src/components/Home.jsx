import React from "react";
import { Link } from "react-router-dom";
import Section from "./common/Section";
import avatar from "../assets/elorm.jpeg";
import { FaLinkedin, FaGithub, FaTwitter, FaPhone } from "react-icons/fa";
import web from "../assets/web.png";
import data from "../assets/commerce.png";
import mobile from "../assets/mobile.png";
import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://serverportfolio.onrender.com";

const Home = () => {
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

  const services = [
    {
      id: 1,
      image: web,
      title: "Web Development"
    },
    {
      id: 2,
      image: data,
      title: "Data Science/Analysis with 🐍"
    },
    {
      id: 3,
      image: mobile,
      title: "Mobile Development"
    }
  ];

  return (
    <div>
      {profile[0] ? (
        <section className="min-h-screen flex flex-col justify-start items-center p-4 text-center mt-40">
          <h2 className="text-5xl font-bold uppercase">Joseph Segbefia</h2>
          <h3 className="py-3 text-2xl">{profile[0].headLine}</h3>
          <p className="max-w-xl font-light text-gray-500 dark:text-white">
            Hello, you are warmly welcome to my portfolio. I am a full stack
            developer, based in Berlin, Germany. I do web development, and
            mobile development.
          </p>
          <div className="flex text-gray-500 dark:text-white justify-evenly py-8 lg:py-16  text-3xl w-full md:w-1/3">
            <a
              href={profile.linkedInURL}
              className="cursor-pointer duration-300 hover:text-rose-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href={profile.gitHubURL}
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
              src={profile[0].avatarURL}
              alt="avatar"
              className="w-80 h-80 md:w-92 md:h-92 rounded-full"
            />
          </div>
          <Section title="Skills:" subtitle="Ever growing skills list">
            <div className="justify-center grid gap-4 lg:gap-3 lg:grid-cols-5 mt-5 md:grid-cols-3 sm:grid-cols-2">
              {profile &&
                profile[0].skills.map((skill, index) => (
                  <p
                    className="text-gray-900 dark:bg-teal-600 bg-rose-600 rounded-md p-1.5 dark:text-white"
                    key={index}
                  >
                    {skill}
                  </p>
                ))}
            </div>
          </Section>

          <Section title="What I can do" subtitle="A list of my super powers">
            <div className="grid gap-10 lg:grid-cols-3">
              {services.map(({ id, image, title }) => (
                <div
                  key={id}
                  className="flex flex-col items-center justify-center p-5 shadow-lg dark:shadow-gray-100 rounded-xl duration-300 ease-in-out hover:scale-110"
                >
                  <img
                    src={image}
                    alt={title}
                    className="w-36 h-36 md:w-44 object-contain"
                  />
                  <h3 className="mt-5 text-base">{title}</h3>
                </div>
              ))}
            </div>
          </Section>
          <br />

          <div className="min-w-fit p-4 flex flex-col justify-start items-center py-16 px-5 text-center shadow-lg dark:shadow-gray-100 rounded-xl duration-300 ease-in-out hover:scale-110">
            <h5 className="mb-2 text-3xl font-bold">Learn More About me</h5>
            <p className="mb-5 text-base">
              Thank you for remaining on the page so far. Get to know me some by
              clicking on the button below. Thank you
            </p>
            <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <Link
                to="/about"
                className="w-full sm:w-auto  hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
              >
                <div className="text-left">
                  <div className="mb-1 text-xs">Know More</div>
                  <div className="-mt-1 font-sans text-sm font-semibold">
                    About Me
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      ) : (
        <p>Loading..</p>
      )}
    </div>
  );
};

export default Home;
