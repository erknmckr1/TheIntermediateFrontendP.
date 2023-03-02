import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faLinkedin);
function Header() {
  return (
    <div className="container mt-5 ">
      <div className="row d-flex align-items-center text-center">
        <div className="col-6 d-flex align-items-center justify-content-center">
          <span className="title" >Speed Typing App</span>
        </div>
        <div className="col-6 pt-2 links d-flex justify-content-center align-items-center">
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/erkan-mustafa-cak%C4%B1r/"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a target="_blank" rel="noreferrer" href="https://github.com/erknmckr1"><FontAwesomeIcon icon={faGithub} /></a>
        </div>
      </div>
    </div>
  );
}

export default Header;
