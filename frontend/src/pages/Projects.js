import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
// import ProjectCard from "../components/ClientCard";

const Projects = () => {
  const [index, setIndex] = useState("");
  const [project, setProject] = useState([]);

  useEffect(() => {
    const getAllProjectData = async () => {
      await axios
        .get("http://127.0.0.1:8000/projects/view_all_projects/")
        .then((res) => {
          const data = res.data;
          setProject(data);
        })
        .catch((err) => console.error(err));
    };
    getAllProjectData();
  }, []);

  return (
    <div>
      <p>
        <b>Project List</b>
      </p>
      {project.map((element, index) => {
        return (
          <>
            <div id={index} key={uuidv4}>
              <p>{element.project_title}</p>
              <p>{element.project_info}</p>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Projects;
