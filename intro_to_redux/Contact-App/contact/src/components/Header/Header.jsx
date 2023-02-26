import React from 'react'
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './header.css'
library.add(faLinkedin);
function Header() {
  return (
    <div className='header mt-3'>
        <div className='row container '>
        <div className='col-4 logo'><h2>Contact App</h2></div>
        <div className='col-4'></div>
        <div className='col-4 links'>
        <div className="social">
            <p>
              <a rel="noreferrer" href="https://www.linkedin.com/in/erkan-mustafa-cak%C4%B1r/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </p>
            <p>
              <a rel="noreferrer" target="_blank" href="https://github.com/erknmckr1">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </p>
            <p>
              <a  rel="noreferrer" target="_blank" href= "https://twitter.com/erknmckr">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </p>
          </div>
        </div>
       
        </div>
        
        
    </div>
  )
}

export default Header