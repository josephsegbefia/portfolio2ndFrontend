import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";
const API_URL = "http://localhost:5005";
const ProjectDetails = () => {
  const [project, setProject] = useState([]);

  const { projectId } = useParams();

  useEffect(() => {
    axios
      .get(`${API_URL}/api/projects/${projectId}`)
      .then((response) => {
        setProject(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [projectId]);

  console.log(project);
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/2 bg-white p-8 shadow-md rounded-lg flex">
        <div className="w-1/3 pr-4">
          <img
            src={project.imageUrl}
            alt="Card Image"
            className="h-auto w-full rounded-lg"
          />
        </div>
        <div className="w-1/2">
          <h2 className="text-2xl font-semibold mb-4">{project.projectName}</h2>
          <p className="text-gray-600">{project.description}</p>
          <div className="justify-center grid gap-4 lg:gap-3 lg:grid-cols-5 mt-5 md:grid-cols-3 sm:grid-cols-2 overflow-scroll">
            <ol>
              {project.techs &&
                project.techs.map((tech, index) => (
                  <li
                    className="text-gray-900 dark:bg-teal-600 bg-rose-600 rounded-md p-1.5 dark:text-white w-fit m-1"
                    key={index}
                  >
                    {tech}
                  </li>
                ))}
            </ol>
          </div>
          <div className="px-6 py-4 flex">
            <a
              className="text-2xl cursor-pointer duration-150 hover:scale-110 m"
              href={project.githubUrl}
            >
              <FaGithub />
            </a>
            <a
              className="text-2xl cursor-pointer duration-150 hover:scale-110"
              href={project.demoLink}
            >
              <FaExternalLinkSquareAlt />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
