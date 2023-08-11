import React from "react";
import axios from "axios";
import moment from "moment";

import { useState, useEffect } from "react";

moment().format();
const API_URL = "http://localhost:5005";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/projects`)
      .then((response) => {
        console.log(response.data);
        setProjects(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h1 className="m-10 justify-center">List of projects</h1>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg m-10">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Project name
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Date Created
              </th>
              {/* <th scope="col" className="px-6 py-3"></th> */}
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {projects.map(({ projectName, description, createdAt }, i) => (
              <tr
                key={i}
                className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {projectName}
                </th>
                <td className="px-6 py-4">{description}</td>
                <td className="px-6 py-4">{`${moment().format(
                  "dddd, MMMM Do YYYY",
                  createdAt
                )}`}</td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    View
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectList;
