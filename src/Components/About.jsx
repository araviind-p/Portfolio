import React from "react";
import Skills from "./Skills.jsx";
import { FaFileDownload } from "react-icons/fa";
import Nav from "./Navbar.jsx";

const About = () => {
  return (
    <>
      <div className="AboutPage">
        <Nav/>
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me!
          </h1>
          <p>
            Hi, my name is <b>Aravind P</b> and I am from Kannur, Kerala, India.
            I'm a <b>Full-stack web developer</b> and a final year university
            student pursuing <b>B.Tech in Computer Science</b>. <br />
            <br />
            I love to create projects with beautiful designs and put my own
            twists on it, you can check out some of my work in the projects
            section.
            <br />
            <br />I am <b>open</b> to new collaborations or work where I can
            contribute and grow. Feel free to connect with me, links are in the
            footer.
            <br />
            Apart from coding I love to make designs and do photography in my
            spare time.
          </p>
          <a
            href="https://drive.google.com/file/d/1Cut-MDMXJYi-g0AeXiqB8bzNt6vFXsml/view?usp=sharing"
            target="_blank"
            className="resume-btn"
          >
            <button>
              Resume <FaFileDownload></FaFileDownload>
            </button>
          </a>
        </div>

        <div></div>
      </div>

      <h1 className="SkillsHeading"> Skillset</h1>
      <div className="skills">
        <Skills skill="HTML" />
        <Skills skill="CSS" />
        <Skills skill="Javascript" />
        <Skills skill="Bootstrap" />
        <Skills skill="React" />
        <Skills skill="Npm" />
        <Skills skill="Mongodb" />
        <Skills skill="Git" />
        <Skills skill="Github" />
        <Skills skill="Python" />
        <Skills skill="C" />
        <Skills skill="Leetcode" />
      </div>
    </>
  );
};

export default About;
