import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const API_URL = "https://portfolioserver-u082.onrender.com";

const EditProject = () => {
  const [project, setProject] = useState("");

  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [demoLink, setDemoLink] = useState("");
  const [techs, setTechs] = useState([]);
  const [tech, setTech] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const navigate = useNavigate();
  const { projectId } = useParams();

  useEffect(() => {
    axios.get(`${API_URL}/api/projects/${projectId}`).then((response) => {
      setProjectName(response.data.projectName);
      setDescription(response.data.description);
      setDemoLink(response.data.demoLink);
      setGithubUrl(response.data.githubUrl);
      setTechs(response.data.techs);
      console.log(response.data);
    });
  }, [projectId]);

  const addTech = () => {
    const techToSave = tech;
    setTechs([...techs, techToSave]);
    setTech("");
  };

  const handleTechChange = (e) => {
    setTech(e.target.value);
  };

  const handleProjectNameChange = (e) => {
    setProjectName(e.target.value);
  };
  const handleDemoLinkChange = (e) => {
    setDemoLink(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleGitHubChange = (e) => {
    setGithubUrl(e.target.value);
  };

  const removeTech = (index) => {
    const updatedTechs = techs.filter((_, i) => i !== index);
    setTechs(updatedTechs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      projectName,
      description,
      githubUrl,
      demoLink,
      techs
    };
    axios
      .put(`${API_URL}/api/projects/${projectId}`, requestBody)
      .then((response) => {
        console.log(response.data);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="p-8 text-left w-full">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col my-2">
          <label className="capitalize text-sm py-2 font-extralight">
            upload project image
          </label>
          <input type="file" onChange={(e) => handleFileUpload(e)} />
        </div>
        <div className="gap-4 w-full">
          <div className="flex flex-col my-2">
            <label className="capitalize text-sm py-2 font-extralight">
              project name
            </label>
            <input
              type="text"
              name="projectName"
              className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
              value={projectName}
              onChange={handleProjectNameChange}
            />
          </div>
          <div className="grid grid-cols-2">
            <div>
              <label className="capitalize text-sm py-2 font-extralight">
                techs
              </label>
              <input
                type="text"
                name="tech"
                placeholder="Add technologies used one after the other and press the  + button after each add"
                className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white w-full"
                value={tech}
                onChange={handleTechChange}
              />
            </div>

            <div>
              <button
                type="button"
                className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-8 w-1/2 justify-center"
                onClick={addTech}
              >
                +
              </button>
            </div>
            <div className="flex w-full">
              Added Techs:
              {techs &&
                techs.map((tech, index) => (
                  <li
                    key={index}
                    onClick={() => removeTech(index)}
                    style={{
                      color: "teal",
                      cursor: "pointer",
                      marginLeft: "8px"
                    }}
                  >
                    {tech}
                  </li>
                ))}
            </div>
          </div>
          <div className="flex flex-col my-2">
            <label className="capitalize text-sm py-2 font-extralight">
              gihub link
            </label>
            <input
              type="text"
              name="githubUrl"
              className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
              value={githubUrl}
              onChange={handleGitHubChange}
            />
          </div>
          <div className="flex flex-col my-2">
            <label className="capitalize text-sm py-2 font-extralight">
              demo link
            </label>
            <input
              type="text"
              name="demoLink"
              className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
              value={demoLink}
              onChange={handleDemoLinkChange}
            />
          </div>

          <div className="flex flex-col my-2">
            <label className="capitalize text-sm py-2 font-extralight">
              description
            </label>
            <textarea
              name="description"
              rows="10"
              className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white resize-none"
              value={description}
              onChange={handleDescriptionChange}
            ></textarea>
          </div>
        </div>

        <div className="flex itesm-center justify-center">
          <button
            type="submit"
            className="my-8 bg-gradient-to-r from-rose-600 to-teal-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200"
          >
            Update Project
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProject;
