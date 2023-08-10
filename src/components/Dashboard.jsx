import React from "react";
import { useState } from "react";
import CreateProject from "./CreateProject";
import ProjectList from "./ProjectList";

const Dashboard = () => {
  const [creatFormOpen, setCreateFormOpen] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  const openCreateForm = () => {
    setCreateFormOpen(true);
    setShowProjects(false);
  };

  const closeCreateForm = () => {
    setCreateFormOpen(false);
  };

  const openProjects = () => {
    setShowProjects(true);
    setCreateFormOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {creatFormOpen ? (
        <>
          <CreateProject />
          <button onClick={closeCreateForm}>Cancel</button>
        </>
      ) : (
        <>
          <button
            type="button"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 m-10"
            onClick={openCreateForm}
          >
            {" "}
            + Create Project
          </button>
          <button
            type="button"
            onClick={openProjects}
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 m-10"
          >
            View Projects
          </button>
        </>
      )}
      {showProjects && <ProjectList />}
    </div>
  );
};

export default Dashboard;
