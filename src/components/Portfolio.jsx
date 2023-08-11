import React from "react";
import Section from "./common/Section";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:5005";
const Portfolio = () => {
  const [index, setIndex] = useState(0);
  const [projects, setProjects] = useState([]);
  const [projectsGroup, setProjectsGroup] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/projects`)
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (projects.length > 0) {
      const chunkedProjects = chunkArray(projects, 6);
      setProjectsGroup(chunkedProjects[index]);
    }
  }, [projects, index]);

  function chunkArray(array, chunkSize) {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunkedArray.push(array.slice(i, i + chunkSize));
    }
    return chunkedArray;
  }

  function handleNext() {
    if (index < chunk.length - 1) {
      setIndex(index + 1);
      setProjectsGroup(chunk[index + 1]);
    }
  }

  function handlePrev() {
    if (index > 0) {
      setIndex(index - 1);
      setProjectsGroup(chunk[index - 1]);
    }
  }
  console.log(projects);
  return (
    <Section title="Portfolio 🗒️" subtitle="Have a look at some of my projects">
      <div className="grid gap-10 lg:grid-cols-3">
        {projectsGroup &&
          projectsGroup.map(
            ({
              _id,
              projectName,
              description,
              imageUrl,
              githubUrl,
              demoLink
            }) => (
              <div
                key={_id}
                className="max-w-sm rounded-2xl overflow-hidden shadow-gray-300 shadow-lg"
              >
                <img className="w-full h-1/2" src={imageUrl} alt="Card Image" />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{projectName}</div>
                  <p className="text-gray-700 text-base truncate">
                    {description}
                  </p>
                </div>
                <div className="px-6 py-4 flex justify-around">
                  <a
                    className="text-2xl cursor-pointer duration-150 hover:scale-110 m"
                    href={githubUrl}
                  >
                    <FaGithub />
                  </a>
                  <a
                    className="text-2xl cursor-pointer duration-150 hover:scale-110"
                    href={demoLink}
                  >
                    <FaExternalLinkSquareAlt />
                  </a>
                </div>
                <Link to={`/projects/${_id}`}>View Details</Link>
              </div>
            )
          )}
      </div>
      <div className="mt-20">
        <button
          type="button"
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          onClick={handlePrev}
        >
          Previous Group
        </button>
        <button
          type="button"
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          onClick={handleNext}
        >
          Next Group
        </button>
      </div>
    </Section>
  );
};

export default Portfolio;
