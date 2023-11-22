
import { NavLink } from 'react-router-dom';
import styles from './landing.module.css';
import { useDispatch } from 'react-redux';
import { getAccess } from '../../redux/actions';
import World from '../../components/world/World';



const Landing = () => {
  const dispatch = useDispatch()
  return (
    <div className={styles.Container}>
      <h1>PI Countries Henry</h1>
      <World />
      <NavLink to={"/home"}>
      <button onClick= {() => {dispatch(getAccess())}}>START</button>
      </NavLink>
    </div>
  )
}

export default Landing