import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
// import ProjectInputBox from "../components/ProjectInputBox";

const Projects = () => {
  const [index, setIndex] = useState("");
  const [project, setProject] = useState([]);
  const [title, setTitle] = useState("");
  const [projectInfo, setProjectInfo] = useState("");

  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleProjectInfoChange = (event) => setProjectInfo(event.target.value);

  useEffect(() => {
    getAllProjectData();
  }, []);

  const getAllProjectData = async () => {
    await axios
      .get("http://127.0.0.1:8000/projects/view_all_projects/")
      .then((res) => {
        const data = res.data;
        setProject(data);
      })
      .catch((err) => console.error(err));
  };

  const handleProjectSubmit = async (event) => {
    event.preventDefault();
    console.log("ADDING PROJECT");

    const submitProjectData = async () => {
      await axios
        .put("http://127.0.0.1:8000/projects/add_project/", {
          project_title: title,
          project_info: projectInfo,
          client_id: 2,
        })
        .then((res) => {
          const data = res.data;
          console.log(data);
        })
        .catch((err) => console.error(err));
    };
    await submitProjectData();
    getAllProjectData();
  };

  return (
    <>
      <div>
        <form onSubmit={handleProjectSubmit}>
          <label>Create Project:</label>
          <div>
            <input
              type="text"
              placeholder="project title"
              onChange={handleTitleChange}
              value={title}
            />
            <input
              type="text"
              placeholder="project information"
              onChange={handleProjectInfoChange}
              value={projectInfo}
            />

            <button type="submit" class="btn btn-secondary">
              Create Project
            </button>
          </div>
        </form>
      </div>
      <div>
        {project.map((element, index) => {
          return (
            <>
              <br />
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
    </>
  );
};

export default Projects;
