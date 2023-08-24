import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";
const API_URL = "https://serverportfolio.onrender.com";
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
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center m-10">
      <div className="bg-white p-8 shadow-md rounded-lg flex flex-col lg:flex-row mt-10">
        <div className="lg:w-1/3 pr-4">
          <img
            src={project.imageUrl}
            alt="Card Image"
            className="h-auto w-full rounded-lg"
          />
        </div>
        <div className="lg:w-2/3">
          <h2 className="text-2xl font-semibold mb-4">{project.projectName}</h2>
          <p className="text-gray-600">{project.description}</p>
          <div className="flex flex-wrap justify-center gap-2 mt-5">
            {project.techs &&
              project.techs.map((tech, index) => (
                <span
                  className="text-gray-900 dark:bg-teal-600 bg-rose-600 rounded-md p-1.5 dark:text-white w-fit m-1"
                  key={index}
                >
                  {tech}
                </span>
              ))}
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
