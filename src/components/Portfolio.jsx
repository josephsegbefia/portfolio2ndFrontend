import React from "react";
import Section from "./common/Section";
import { useState } from "react";

const Portfolio = () => {
  const [index, setIndex] = useState(0);

  const projects = [
    {
      id: 1,
      projectName: "First Project",
      description: "Web Development",
      techs: ["React", "Express", "Node"],
      imageUrl: ""
    },
    {
      id: 2,
      projectName: "Second Project",
      description: "Web Development",
      techs: ["React", "Express", "Node"],
      imageUrl: ""
    },
    {
      id: 3,
      projectName: "Third Project",
      description: "Web Development",
      techs: ["React", "Express", "Node"],
      imageUrl: ""
    },
    {
      id: 4,
      projectName: "Forth Project",
      description: "Web Development",
      techs: ["React", "Express", "Node"],
      imageUrl: ""
    },
    {
      id: 5,
      projectName: "First Project",
      description: "Web Development",
      techs: ["React", "Express", "Node"],
      imageUrl: ""
    },
    {
      id: 6,
      projectName: "Second Project",
      description: "Web Development",
      techs: ["React", "Express", "Node"],
      imageUrl: ""
    },
    {
      id: 7,
      projectName: "Third Project",
      description: "Web Development",
      techs: ["React", "Express", "Node"],
      imageUrl: ""
    },
    {
      id: 8,
      projectName: "Forth Project",
      description: "Web Development",
      techs: ["React", "Express", "Node"],
      imageUrl: ""
    }
  ];

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
        {projectsGroup.map(
          ({ id, projectName, description, techs, imageUrl }, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-5 shadow-lg dark:shadow-gray-100 rounded-xl duration-300 ease-in-out hover:scale-110"
            >
              <img
                src={imageUrl}
                alt={projectName}
                className="w-36 h-36 md:w-44 object-contain"
              />
              <h3 className="mt-5 text-base">{projectName}</h3>
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
