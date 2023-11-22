import { useDispatch, useSelector } from "react-redux";
import styles from "./detail.module.css";
import { useEffect } from "react";
import { cleanerAll, getCountry } from "../../redux/actions";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import coatOptional from "../../../src/assets/coatOptional.png";

function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const countryDetail = useSelector((state) => state.countryDetail);
  const {
    nameOfficial,
    flags,
    coatOfArms,
    continents,
    capital,
    subregion,
    area,
    population,
    Activities,
  } = countryDetail;
  const history = useNavigate();
  useEffect(() => {
    dispatch(getCountry(id));
    return () => {
      dispatch(cleanerAll());
    };
  }, [dispatch, id]);

  return (
    <div className={styles.Container}>
      {countryDetail ? (
        <div className={styles.Detail}>
          <div className={styles.ContainButtonClose}>
            <button
              onClick={() => {
                history(-1);
              }}
            >
              x
            </button>
          </div>
          <h1 className={styles.CountryH1}>Country</h1>
          <div className={styles.CountryDetail}>
            <article className={styles.ArticleImg}>
            <img src={flags} alt={flags} className={styles.ImgFlags}/>
            <img src={coatOfArms? coatOfArms : coatOptional} className={styles.ImgcoatOfArms}/>
            </article>
            <div className={styles.ContainerNameCountry}>
            <h2>{nameOfficial}</h2>
            </div>
            <div>
              <label>Capital:</label>
              <h3>{capital}</h3>
            </div>
            <div>
              <label>Continent:</label>
              <h3>{continents}</h3>
            </div>
            <div>
              <label>Sub Region:</label>
              <h3>{subregion}</h3>
            </div>
            <div>
              <label>Area:</label>
              <h3>{area} m²</h3>
            </div>
            <div>
              <label>Populations:</label>
              <h3>{population}</h3>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
      <div className={styles.Activities}>
        <h1 className={styles.ActivityH1}>{Activities?.length > 1 ? "Activities" : "Activity"}</h1>
        <div className={styles.ActivityCards}>
          {Activities?.length ? (
            Activities.map((Activity) => (
              <article key={Activity.id} className={styles.Activity}>
         
                  <h2>{Activity.name}</h2>

                  <div>
                  <label>Difficult level:</label>
                  <h3>{Activity.hard}</h3>
                </div>
                <div>
                  <label>Duration:</label>
                  <h3>{Activity.duration}</h3>
                </div>
                <div>
                  <label>Season:</label>
                  <h3>{Activity.season}</h3>
                </div>
              </article>
            ))
          ) : (
            <span>Country without activities</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Detail;
