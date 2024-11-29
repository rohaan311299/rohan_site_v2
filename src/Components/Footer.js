import React from "react";
import "../Styles/Footer.css"; // Add your CSS styles here
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        Designed & Built by <span className="footer-name">Rohan Kacheria</span>
      </p>
      <div className="footer-icons">
        {/* GitHub */}
        <a
          href="https://github.com/rohaan311299"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon-link"
        >
          <GitHubIcon />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/rohan-kacheria"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon-link"
        >
          <LinkedInIcon />
        </a>

        {/* Email */}
        <a
          href="mailto:rohankacheriam@gmail.com"
          className="footer-icon-link"
        >
          <MailIcon />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
