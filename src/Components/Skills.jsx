import React from "react";
import {
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaBootstrap,
  FaHtml5,
  FaCss3,
} from "react-icons/fa";
import { TbCircleLetterC  } from "react-icons/tb";
import { DiJavascript1 } from "react-icons/di";

const Skills = ({ skill }) => {
  const icon = {
    HTML: <FaHtml5 />,
    CSS: <FaCss3 />,
    Bootstrap: <FaBootstrap />,
    Javascript: <DiJavascript1 />,
    React: <FaReact />,
    Git: <FaGitAlt />,
    Github: <FaGithub />,
    C: <TbCircleLetterC  />,
    Npm: <FaNpm />,
  };

  return (
    <div title={skill} className="SkillBox">
      {icon[skill]}
    </div>
  );
};

export default Skills;
