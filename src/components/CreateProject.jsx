import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5005";

const CreateProject = () => {
  const [techReceived, setTechReceived] = useState([]);
  const [tech, setTech] = useState("");

  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const navigate = useNavigate();

  const addTech = () => {
    const techToSave = tech;
    setTechReceived([...techReceived, techToSave]);
    setTech("");
  };

  const handleTechChange = (e) => {
    setTech(e.target.value);
  };

  const handleProjectNameChange = (e) => {
    setProjectName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleFileUpload = (e) => {
    const uploadData = new FormData();

    uploadData.append("imageUrl", e.target.files[0]);

    axios
      .post(`${API_URL}/api/upload-project-image`, uploadData)
      .then((response) => {
        console.log("File URL:===>", response.data.fileUrl);
        setImageUrl(response.data.fileUrl);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      projectName,
      description,
      imageUrl,
      techs: techReceived
    };

    axios
      .post(`${API_URL}/api/projects`, requestBody)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    setProjectName("");
    setDescription("");
    setImageUrl("");
    setTechReceived([]);
  };

  console.log(techReceived);

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
                name="techs"
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
              {techReceived &&
                techReceived.map((tech, index) => (
                  <p style={{ color: "teal", marginLeft: "8px" }} key={index}>
                    {tech}
                  </p>
                ))}
            </div>
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
            Save Project
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProject;
