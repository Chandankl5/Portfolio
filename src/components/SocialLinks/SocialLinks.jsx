import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub, faLinkedin, faGoogle } from "@fortawesome/free-brands-svg-icons";

import styles from './SocialLinks.module.css';

function SocialLinks() {
  return (
    <div className={styles.socialLinks}>
      <a href="https://github.com/Chandankl5" target="_blank" className={styles.icon}>
        <FontAwesomeIcon icon={faSquareGithub}/>
      </a>
      <a href="https://www.linkedin.com/in/chandan-kl-5a0511191/" target="_blank" className={styles.icon}>
        <FontAwesomeIcon icon={faLinkedin}/>
      </a>
      <a href="mailto:chandankl0310@gmail.com" className={styles.icon}><FontAwesomeIcon icon={faGoogle}/></a>
    </div>
  );
}

export default SocialLinks;
