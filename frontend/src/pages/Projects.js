import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
// import ProjectCard from "../components/ProjectCard";

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
      {project.map((element, index) => {
        return (
          <>
            {/* <div id={index} key={uuidv4}>
              <p>{element.project_title}</p>
              <p>{element.project_info}</p>
            </div> */}

            <div class="card" id={index} key={uuidv4}>
              <div class="card-header">Project</div>
              <div class="card-body">
                <h5 class="card-title">{element.project_title}</h5>
                <p class="card-text">{element.project_info}</p>
                <a href="#" class="btn btn-secondary">
                  Send document
                </a>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Projects;
