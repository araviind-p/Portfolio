import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    WeatherAppdesc:
      "Simple weather app that can be used for finding weather conditions in different cities using openweathermap api",
    WeatherAppGithub: "https://github.com/araviind-p/Weather-app",
    WeatherAppWebsite: "https://react-weather-app-rmyz.onrender.com/",

    BookListdesc:
      "A simple book list web app built with the MERN stack. It can be used for creating, viewing, editing and deleting book lists.",
      BookListGithub: "https://github.com/araviind-p/BookStore-Backend/tree/main",
      BookListWebsite:"https://bookstore-frontend-1jxu.onrender.com/",

    SimpleAmazondesc:
      "Developed a full-stack e-commerce web application replicating the core functionalities of Amazon using the MERN (MongoDB, Express.js, React.js, Node.js) stack.",
      SimpleAmazonGithub:"https://github.com/araviind-p/amazon-mern-backend",
      SimpleAmazonWebsite:"https://amazon-mern-frontend.onrender.com/",

    Attendancedesc:
      "Developed a full-stack e-commerce web application replicating the core functionalities of Amazon using the MERN (MongoDB, Express.js, React.js, Node.js) stack.",
      AttendanceGithub:"https://github.com/araviind-p/Attendance",
      AttendanceWebsite:"https://attendance-nmo8.onrender.com/"
  };

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + "Desc"]}
        <br />

        <a href={desc[projectName + "Github"]} target="_blank">
          <button className="projectbtn">
            <FaGithub /> Github
          </button>
        </a>

        <a href={desc[projectName + "Website"]} target="_blank">
          <button className="projectbtn">
            <CgFileDocument /> Site
          </button>
        </a>
      </div>
    </div>
  );
};
export default ProjectBox;
