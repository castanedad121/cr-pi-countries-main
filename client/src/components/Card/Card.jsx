import styles from "./Card.module.css";
import { Link } from "react-router-dom";


//! Import icons
import { FaEarthAfrica } from "react-icons/fa6";
import { FaEarthAmericas } from "react-icons/fa6";
import { FaEarthAsia } from "react-icons/fa6";
import { FaEarthEurope } from "react-icons/fa6";
import { FaEarthOceania } from "react-icons/fa6";
import { MdGroups3 } from "react-icons/md";

const Card = (props) => {
  const { id, flags, nameCommon, continents, population } = props;

  return (
    <div className={styles.containerCard}>
      
      <div className={styles.ContainerInfo}>
        <div>
          <img src={flags} className={styles.ImgBanderaSmall} alt="" />
          <div className={styles.ContainerName}>
            <h2 className={nameCommon.length >20 ?styles.NameLarge:styles.Name}>{nameCommon}</h2>
          </div>
        </div>
        <div className={styles.ContainerIcons}>
          <div>
            <MdGroups3 className={styles.IconGroup} />
            <h3> {population}</h3>
          </div>
          <div>
            {continents === "Americas" ? (
              <FaEarthAmericas className={styles.Icons} />
            ) : continents === "Africa" ? (
              <FaEarthAfrica className={styles.Icons} />
            ) : continents === "Asia" ? (
              <FaEarthAsia className={styles.Icons} />
            ) : continents === "Europe" ? (
              <FaEarthEurope className={styles.Icons} />
            ) : (
              <FaEarthOceania className={styles.Icons} />
            )}
            <h3>{continents}</h3>
          </div>
        </div>
        <Link to={`/detail/${id}`}>
          <button className={styles.ButtonSeeMore}>See more</button>
        </Link>
      </div>
      <div className={styles.ContainerBandera}>
        <img src={flags} className={styles.ImgBandera} alt="" />
      </div>
    </div>
  );
};

export default Card;
