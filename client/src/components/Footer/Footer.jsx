import styles from './Footer.module.css'

import {BsGithub, BsLinkedin} from "react-icons/bs";
import {SiGmail} from "react-icons/si";

const Footer = () => {
  return (
    <div className={styles.Footer}>
        <div className={styles.ContainerLinks}>
      <a href="https://www.linkedin.com/in/luis-daniel-casta%C3%B1eda-abanto-5b3119216/" target="_blank" rel="noreferrer">
       <BsLinkedin/>
      </a>
      <a href="https://github.com/castanedad121" target="_blank" rel="noreferrer">
       <BsGithub/>
      </a>
      <a href="mailto:castanedad121@gmail.com?" target="_blank" rel="noreferrer">
       <SiGmail/>
      </a>     
    </div>
    <span>Developed by Daniel</span>
    </div>
  )
}

export default Footer