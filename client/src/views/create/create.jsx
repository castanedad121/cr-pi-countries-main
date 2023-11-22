import { useEffect, useState } from "react";
import styles from "./create.module.css";
import Nav from "../../components/Nav/Nav";
import {
  getAllCountries,
  postActivity,
  selectCountry,
  deselectCountry,
  cleanerAll,
} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { validation } from "../../utils/validation";

const Create = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const countAll = useSelector((state) => state.countAll);
  const selectCountries = useSelector((state) => state.selectCountries);
  const deselectCountries = useSelector((state) => state.deselectCountries);
  const activities = useSelector((state) => state.allActivities);
  const [errors, setErrors] = useState({
    name: "",
    hard: "",
    duration: "",
    season: "",
    countryId: "",
  });
  const [newActivity, setNewActivity] = useState({
    name: "",
    hard: "",
    duration: "",
    season: "",
    countryId: [],
  });
  const cleanerCreate = () => {
    dispatch(cleanerAll());
    setNewActivity({
      name: "",
      hard: "",
      duration: "",
      season: "",
      countryId: [],
    });
    setName("");
    document.getElementById("1").checked = false;
    document.getElementById("2").checked = false;
    document.getElementById("3").checked = false;
    document.getElementById("4").checked = false;
    document.getElementById("5").checked = false;
    document.getElementById("Spring").checked = false;
    document.getElementById("Winter").checked = false;
    document.getElementById("Autumn").checked = false;
    document.getElementById("Summer").checked = false;
    
  };
  const handlerChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setNewActivity({
      ...newActivity,
      [property]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const activity = {
      ...newActivity,
      countryId: selectCountries.map((country) => country.id),
    };

    if (
      errors.name ||
      errors.hard ||
      errors.duration ||
      errors.season ||
      errors.countryId
    ) {
      return;
    }

    if (window.confirm("Are you sure to create the activity")) {
      dispatch(postActivity(activity));
      cleanerCreate();
    }
  };

  const handlerChangeCountry = (event) => {
    const name = event.target.value;
    setName(name);
  };

  const handlerSelectCountry = (event) => {
    event.preventDefault();
    const country = {
      id: event.target.id,
      nameCommon: event.target.name,
      flags: event.target.value,
    };
    selectCountries.some((countries) => countries.id === country.id)
      ? window.alert("the country has already been selected")
      : dispatch(selectCountry(country));
  };

  const handlerDeselectCountry = (event) => {
    event.preventDefault();
    const country = {
      id: event.target.id,
      nameCommon: event.target.name,
      flags: event.target.value,
    };
    dispatch(deselectCountry(country));
  };

  const handlerClickSubmit = () => {
    setErrors(
      validation(
        {
          ...newActivity,
          countryId: selectCountries.map((country) => country.id),
        },
        activities
      )
    );
  };

  useEffect(() => {
    dispatch(getAllCountries(name));
  }, [dispatch, name]);

  useEffect(() => {
    return () => {
      dispatch(cleanerAll());
    }
  }, [dispatch]);

  return (
    <div className={styles.Container}>
      <Nav />
      <div className={styles.CreateActivity}>
        <h1>Create Activity</h1>
        <form className={styles.Form} onSubmit={handleSubmit}>
          <div className={styles.SectionsForm}>
            <h3>Name</h3>
            <input
              className={styles.Input}
              name="name"
              value={newActivity.name}
              onChange={handlerChange}
            />
            {errors.name && <span>{errors.name}</span>}
          </div>
          <div className={styles.SectionsForm}>
            <h3>Difficulty level</h3>
            <label>
              <input
                id="1"
                name="hard"
                value={1}
                onChange={handlerChange}
                type="radio"
              />
              1
            </label>
            <label>
              <input
                id="2"
                name="hard"
                value={2}
                onChange={handlerChange}
                type="radio"
              />
              2
            </label>
            <label>
              <input
                id="3"
                name="hard"
                value={3}
                onChange={handlerChange}
                type="radio"
              />
              3
            </label>
            <label>
              <input
                id="4"
                name="hard"
                value={4}
                onChange={handlerChange}
                type="radio"
              />
              4
            </label>
            <label>
              <input
                id="5"
                name="hard"
                value={5}
                onChange={handlerChange}
                type="radio"
              />
              5
            </label>
            {errors.hard && <span>{errors.hard}</span>}
          </div>
          <div className={styles.SectionsForm}>
            <h3>Duration</h3>
            <input
              className={styles.Input}
              name="duration"
              value={newActivity.duration}
              onChange={handlerChange}
              placeholder="00:00:00"
            />
            {errors.duration && <span>{errors.duration}</span>}
          </div>
          <div className={styles.SectionsForm}>
            <h3>Season of the year</h3>
            <label>
              <input
                id="Summer"
                name="season"
                value="Summer"
                onChange={handlerChange}
                type="radio"
              />
              Summer
            </label>
            <label>
              <input
                id="Autumn"
                name="season"
                value="Autumn"
                onChange={handlerChange}
                type="radio"
              />
              Autumn
            </label>
            <label>
              <input
                id="Winter"
                name="season"
                value="Winter"
                onChange={handlerChange}
                type="radio"
              />
              Winter
            </label>
            <label>
              <input
                id="Spring"
                name="season"
                value="Spring"
                onChange={handlerChange}
                type="radio"
              />
              Spring
            </label>
            {errors.season && <span>{errors.season}</span>}
          </div>
          <div className={styles.SectionsSelect}>
            <h3>Countries</h3>
            <input
              className={styles.Input}
              id="idCounties"
              placeholder="Country Name..."
              value={name}
              onChange={handlerChangeCountry}
            />
            {errors.countryId && <span>{errors.countryId}</span>}

            <div className={styles.ContainerSelect}>
              <div className={styles.ContainerSelectDiv}>
                {countAll && name !== "" ? (
                  <div className={styles.ContainerSelectDiv}>
                    {deselectCountries?.map((country) => {
                      return (
                        <div className={styles.Countries} key={country.id}>
                          <img src={country.flags} alt={country.nameCommon} />
                          <label className={styles.Span}>
                            {country.nameCommon}
                          </label>
                          <button
                            className={styles.Buttonmore}
                            id={country.id}
                            value={country.flags}
                            name={country.nameCommon}
                            onClick={handlerSelectCountry}
                            type="button"
                          >
                            +
                          </button>
                        </div>
                      );
                    })}
                  </div>
                ) : name === "" ? (
                  <label className={styles.Span}>Search Country</label>
                ) : (
                  <span className={styles.Span}>Country not matches!!!</span>
                )}
              </div>

              <div className={styles.ContainerSelectDiv}>
                {selectCountries.length ? (
                  selectCountries.map((country) => {
                    return (
                      <div key={country.id} className={styles.Countries}>
                        <img
                          src={country.flags}
                          alt={country.nameCommon}
                          width="30"
                          height="20"
                        />
                        <label className={styles.Span}>
                          {country.nameCommon}
                        </label>
                        <button
                          className={styles.Buttonmin}
                          id={country.id}
                          value={country.flags}
                          name={country.nameCommon}
                          onClick={handlerDeselectCountry}
                          type="button"
                        >
                          x
                        </button>
                      </div>
                    );
                  })
                ) : (
                  <label className={styles.Span}>Country not select!!!</label>
                )}
              </div>
            </div>
          </div>

          <div className={styles.SectionsSubmit}>
            <button
              className={styles.ButtonSubmit}
              type="submit"
              value="Submit"
              onClick={handlerClickSubmit}
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
