import React from "react";
import ProjectBox from "./ProjectBox";
import WeatherImg from "../images/WeatherApp.png";
import BookListImg from "../images/BookList.png"
import SimpleAmazonImg from "../images/SimpleAmazon.png"
import AttendanceImg from "../images/Attendance.png"
import FoodRecipie from "../images/FoodRecipie.png"

const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        <ProjectBox projectPhoto={WeatherImg} projectName="WeatherApp" />
        <ProjectBox projectPhoto={BookListImg} projectName="BookList" />
        <ProjectBox projectPhoto={SimpleAmazonImg} projectName="SimpleAmazon" />
        <ProjectBox projectPhoto={AttendanceImg} projectName="Attendance" />
        <ProjectBox projectPhoto={FoodRecipie} projectName="FoodRecipie" />
      </div>
    </div>
  );
};

export default Projects;
