import foto from "../../assets/foto.png";
import styles from './about.module.css'
import {BsGithub, BsLinkedin} from "react-icons/bs";
import {SiGmail} from "react-icons/si";
import Nav from '../../components/Nav/Nav';


const About = () => {
  return (
    <div className={styles.Container}>
        <Nav />
      <div className={styles.ContainerAbout}>
    <div className={styles.ImgContainer}>
      <img src={foto} className={styles.Img}/>  
    </div>
    <div className={styles.Containertext}>
      <h1>About Us</h1>
    <label>Hello, my name is <span>Daniel Castañeda,</span> I am a Full Stack student at Henry and this is my individual project Countries. Here I am capturing everything I have learned so far: Javascript | HTML | CSS | React | Redux | Sequelize | Express | NodeJs | PostgreSQL</label>
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
    </div>  
    </div></div>
  )
}

export default About