import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons';
function Footer() {
  return (
    <div className='footer'>
        <div className='links_div'>
            <ul className='link_list'>
                <li className='list'><a rel='noreferrer' target={'_blank'} href="https://www.linkedin.com/in/erkan-mustafa-cak%C4%B1r/"><FontAwesomeIcon icon={faLinkedin}/></a></li>
                <li className='list'><a rel='noreferrer' target={'_blank'} href="https://github.com/erknmckr1"><FontAwesomeIcon icon={faGithub}/></a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer