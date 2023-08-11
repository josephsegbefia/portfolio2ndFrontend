import React from "react";
import Section from "./common/Section";
import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";
const Portfolio = () => {
  const [index, setIndex] = useState(0);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/projects`)
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [index]);

  const chunk = chunkArray(projects, 6);
  const [projectsGroup, setProjectsGroup] = useState(chunk[0]);

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
  return (
    <Section title="Portfolio 🗒️" subtitle="Have a look at some of my projects">
      <div className="grid gap-10 lg:grid-cols-3">
        {projectsGroup &&
          projectsGroup.map(
            ({ id, projectName, description, techs, imageUrl }, index) => (
              <h1>Hello</h1>
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
