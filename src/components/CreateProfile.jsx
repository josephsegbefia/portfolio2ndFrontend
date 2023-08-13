import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5005";

const CreateProfile = () => {
  const [skillReceived, setSkillReceived] = useState([]);
  const [skill, setSkill] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gitHubURL, setGitHubURL] = useState("");
  const [headLine, setHeadLine] = useState("");
  const [linkedInURL, setLinkedInURL] = useState("");
  const [avatarURL, setAvatarURL] = useState("");

  const navigate = useNavigate();

  const handleAvatarUpload = (e) => {
    const uploadData = new FormData();

    uploadData.append("avatarURL", e.target.files[0]);

    axios
      .post(`${API_URL}/api/upload`, uploadData)
      .then((response) => {
        console.log("File URL=====>", response.data.fileUrl);
        setAvatarURL(response.data.fileUrl);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addSkill = () => {
    const skillToSave = skill;
    setSkillReceived([...skillReceived, skillToSave]);
    setSkill("");
  };

  const handleSkillChange = (e) => {
    setSkill(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      firstName,
      lastName,
      email,
      phone,
      headLine,
      gitHubURL,
      linkedInURL,
      avatarURL,
      skills: skillReceived
    };

    axios
      .post(`${API_URL}/api/profile`, requestBody)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    setEmail("");
    setFirstName("");
    setLastName("");
    setGitHubURL("");
    setHeadLine("");
    setLinkedInURL("");
    setPhone("");
    setAvatarURL("");
    setSkillReceived([]);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleGitHubChange = (e) => {
    setGitHubURL(e.target.value);
  };

  const handleLinkedInChange = (e) => {
    setLinkedInURL(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleHeadlineChange = (e) => {
    setHeadLine(e.target.value);
  };

  return (
    <div className="p-8 text-left w-full">
      <h1 className="text-center">Create Profile</h1>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col my-2">
          <label className="capitalize text-sm py-2 font-extralight">
            upload picture
          </label>
          <input type="file" onChange={(e) => handleAvatarUpload(e)} />

          <div className="grid gap-4 grid-cols-2">
            <div className="flex flex-col my-2">
              <label className="capitalize text-sm py-2 font-extralight">
                first name
              </label>
              <input
                type="text"
                className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                name={firstName}
                value={firstName}
                onChange={handleFirstNameChange}
              />
            </div>

            <div className="flex flex-col my-2">
              <label className="capitalize text-sm py-2 font-extralight">
                last name
              </label>
              <input
                type="text"
                className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                name={lastName}
                value={lastName}
                onChange={handleLastNameChange}
              />
            </div>
          </div>

          <div className="flex flex-col my-2">
            <label className="capitalize text-sm py-2 font-extralight">
              headline
            </label>
            <input
              type="text"
              className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
              name={headLine}
              value={headLine}
              onChange={handleHeadlineChange}
            />
          </div>
          <div className="grid gap-4 grid-cols-2">
            <div className="flex flex-col my-2">
              <label className="capitalize text-sm py-2 font-extralight">
                email
              </label>
              <input
                type="text"
                className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                name={email}
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="flex flex-col my-2">
              <label className="capitalize text-sm py-2 font-extralight">
                phone
              </label>
              <input
                type="text"
                className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                name={phone}
                value={phone}
                onChange={handlePhoneChange}
              />
            </div>
          </div>

          <div className="grid gap-4 grid-cols-2">
            <div className="flex flex-col my-2">
              <label className="capitalize text-sm py-2 font-extralight">
                linkedin url
              </label>
              <input
                type="text"
                className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                name={linkedInURL}
                value={linkedInURL}
                onChange={handleLinkedInChange}
              />
            </div>
            <div className="flex flex-col my-2">
              <label className="capitalize text-sm py-2 font-extralight">
                github url
              </label>
              <input
                type="text"
                className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                name={gitHubURL}
                value={gitHubURL}
                onChange={handleGitHubChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-2">
            <div>
              <label className="capitalize text-sm py-2 font-extralight">
                Skills
              </label>
              <input
                type="text"
                name="techs"
                placeholder="Add the skills you have one after the other and press the  + button after each add"
                className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white w-full"
                value={skill}
                onChange={handleSkillChange}
              />
            </div>

            <div>
              <button
                type="button"
                className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-8 w-1/2 justify-center"
                onClick={addSkill}
              >
                +
              </button>
            </div>
            <div className="flex w-full">
              Added Skills:
              {skillReceived &&
                skillReceived.map((skill, index) => (
                  <p style={{ color: "teal", marginLeft: "8px" }} key={index}>
                    {skill}
                  </p>
                ))}
            </div>
          </div>
        </div>
        <div className="flex itesm-center justify-center">
          <button
            type="submit"
            className="my-8 bg-gradient-to-r from-rose-600 to-teal-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200"
          >
            Save Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProfile;
