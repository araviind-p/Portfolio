import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <div className="footer-container">
      <footer>
        <h4>Copyright &copy; {year} | All Rights Reserved.</h4>
        </footer>
        <footer>
        <div className="footerLinks">
          <a href="https://github.com/araviind-p" target="_blank">
            <FaGithub />
          </a>
          <a href="https://instagram.com/araviind_p" target="_blank">
            <FaInstagram />
          </a>

          <a href="mailTo:aravindparavind10@gmail.com" target="_blank">
            <GrMail />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
