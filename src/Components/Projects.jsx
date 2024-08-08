import React from "react";
import ProjectBox from "./ProjectBox";
import WeatherImg from "../images/WeatherApp.png";
import BookListImg from "../images/BookList.png";
import SimpleAmazonImg from "../images/SimpleAmazon.png";
import AttendanceImg from "../images/Attendance.png";
import FoodRecipie from "../images/FoodRecipie.png";
import OTP_MERN from "../images/OTP_MERN.png";
import Nav from "./Navbar";
import Footer from "./Footer";

const Projects = () => {
  return (
    <>
      <div>
        <Nav />
        <h1 className="projectHeading">
          My <b>Projects</b>
        </h1>
        <div className="project">
          <ProjectBox projectPhoto={OTP_MERN} projectName="OTP_MERN" />
          <ProjectBox projectPhoto={SimpleAmazonImg} projectName="SimpleAmazon" />
          <ProjectBox projectPhoto={BookListImg} projectName="BookList" />
          <ProjectBox projectPhoto={FoodRecipie} projectName="FoodRecipie" />
          <ProjectBox projectPhoto={WeatherImg} projectName="WeatherApp" />
          <ProjectBox projectPhoto={AttendanceImg} projectName="Attendance" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
