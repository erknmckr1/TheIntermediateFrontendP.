import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="row footer">
      <div className="col-4"></div>
      <div className="col-4  author"><span>by Erkan Mustafa Çakır</span></div>
      <div className="col-4">
        <div className=" brands">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/erkan-mustafa-cak%C4%B1r/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/erknmckr1"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
