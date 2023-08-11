import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

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
  return <div className="flex min-h-screen"></div>;
};

export default ProjectDetails;
