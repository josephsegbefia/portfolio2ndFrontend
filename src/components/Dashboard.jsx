import React from "react";
import { useState } from "react";
import CreateProject from "./CreateProject";
import ProjectList from "./ProjectList";
import MessagesList from "./MessagesList";
import JobList from "./JobList";
import CreateProfile from "./CreateProfile";

const Dashboard = () => {
  const [activeButton, setActiveButton] = useState(null);

  const openCreateForm = () => {
    setActiveButton("create");
  };

  const openProjectsTable = () => {
    setActiveButton("projects");
  };

  const openMessagesTable = () => {
    setActiveButton("messages");
  };

  const openJobsTable = () => {
    setActiveButton("jobs");
  };

  const openCreateProfile = () => {
    setActiveButton("profile");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="grid gap-10 lg:grid-cols-3">
        <div className="flex flex-col items-center justify-center p-5 rounded-xl outline-teal-600 ">
          <h1>Hello</h1>
        </div>

        <div className="flex flex-col items-center justify-center p-5 rounded-xl outline-teal-600 ">
          <h1>Hello</h1>
        </div>

        <div className="flex flex-col items-center justify-center p-5 rounded-xl outline-teal-600 ">
          <h1>Hello</h1>
        </div>
      </div>
      {activeButton === "create" ? (
        <>
          <CreateProject />
          <button onClick={() => setActiveButton(null)}>Cancel</button>
        </>
      ) : activeButton === "projects" ? (
        <>
          <ProjectList />
          <button onClick={() => setActiveButton(null)}>Cancel</button>
        </>
      ) : activeButton === "messages" ? (
        <>
          <MessagesList />
          <button onClick={() => setActiveButton(null)}>Cancel</button>
        </>
      ) : activeButton === "jobs" ? (
        <>
          <JobList />
          <button onClick={() => setActiveButton(null)}>Cancel</button>
        </>
      ) : activeButton === "profile" ? (
        <>
          <CreateProfile />
          <button onClick={() => setActiveButton(null)}>Cancel</button>
        </>
      ) : (
        <>
          <button
            type="button"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5  mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 m-10"
            onClick={openCreateForm}
          >
            + Create Project
          </button>
          <button
            type="button"
            onClick={openProjectsTable}
            className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-10"
          >
            View Projects
          </button>
          <button
            type="button"
            onClick={openMessagesTable}
            className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-10"
          >
            View Messages
          </button>

          <button
            type="button"
            onClick={openJobsTable}
            className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-10"
          >
            View Jobs
          </button>
          <button
            type="button"
            onClick={openCreateProfile}
            className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-10"
          >
            Create profile
          </button>
        </>
      )}
    </div>
  );
};

export default Dashboard;
