import React from "react";
import {
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaBootstrap,
  FaHtml5,
  FaCss3,
  FaPython,
} from "react-icons/fa";
import { TbCircleLetterC  } from "react-icons/tb";
import { DiJavascript1 } from "react-icons/di";
import { SiMongodb,SiLeetcode } from "react-icons/si";

const Skills = ({ skill }) => {
  const icon = {
    HTML: <FaHtml5 />,
    CSS: <FaCss3 />,
    Javascript: <DiJavascript1 />,
    Bootstrap: <FaBootstrap />,
    React: <FaReact />,
    Npm: <FaNpm />,
    Mongodb:<SiMongodb />,
    Git: <FaGitAlt />,
    Github: <FaGithub />,
    Python:<FaPython />,
    C: <TbCircleLetterC  />,
    Leetcode: <SiLeetcode />,
  };

  return (
    <div title={skill} className="SkillBox">
      {icon[skill]}
    </div>
  );
};

export default Skills;
