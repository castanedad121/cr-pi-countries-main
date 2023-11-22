import styles from "./Error.module.css";
import World from "../../components/world/World";
import Nav from "../../components/Nav/Nav";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className={styles.Container}>
        <Nav />
      <div className={styles.ContainerError}>
        <h1 className={styles.ContainerH1}>4</h1>
        <div className={styles.ContainWorld}>
          <World />
        </div>
        <h1 className={styles.ContainerH1}>4</h1>
      </div>
      <div className={styles.ContainerEnd}>
        <h2>The page you are trying to search does not exist.</h2>
        <Link to={"/"} >
        <button>Restart</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
