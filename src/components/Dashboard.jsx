import React from "react";
import { useState } from "react";
import CreateProject from "./CreateProject";
import ProjectList from "./ProjectList";
import MessagesList from "./MessagesList";

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

  return (
    <div className="min-h-screen flex flex-col">
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
      ) : (
        <>
          <button
            type="button"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 m-10"
            onClick={openCreateForm}
          >
            + Create Project
          </button>
          <button
            type="button"
            onClick={openProjectsTable}
            className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-10"
          >
            View Projects
          </button>
          <button
            type="button"
            onClick={openMessagesTable}
            className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-10"
          >
            View Messages
          </button>
        </>
      )}
    </div>
  );
  //   const [display, setDisplay] = useState("block");

  //   const openCreateForm = () => {
  //     setCreateFormOpen(true);
  //     setShowProjects(false);
  //     setDisplay("none");
  //   };

  //   const closeCreateForm = () => {
  //     setCreateFormOpen(false);
  //   };

  //   const openProjects = () => {
  //     setShowProjects(true);
  //     setCreateFormOpen(false);
  //   };

  //   return (
  //     <div className="min-h-screen flex flex-col">
  //       {creatFormOpen ? (
  //         <>
  //           <CreateProject />
  //           <button onClick={closeCreateForm}>Cancel</button>
  //         </>
  //       ) : (
  //         <>
  //           <button
  //             type="button"
  //             className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 m-10"
  //             onClick={openCreateForm}
  //           >
  //             + Create Project
  //           </button>
  //           {/* <button
  //             type="button"
  //             onClick={openProjects}
  //             className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 m-10"
  //           >
  //             View Projects
  //           </button>
  //           <button
  //             type="button"
  //             // onClick={openProjects}
  //             className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 m-10"
  //           >
  //             View Messages
  //           </button> */}
  //         </>
  //       )}
  //       {showProjects ? (
  //         <>
  //           <ProjectList />
  //           <button onClick={""}>Cancel</button>
  //         </>
  //       ) : (
  //         <>
  //           <button
  //             type="button"
  //             className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 m-10"
  //             onClick={openProjects}
  //             style={{ display: { display } }}
  //           >
  //             Show Projects
  //           </button>
  //         </>
  //       )}
  //     </div>
  //   );
};

export default Dashboard;
