import styles from './Background.module.css';
import backgroundLogin from '../../assets/backgroundcountries.mp4';
import background from '../../assets/TravelWolrd.mp4';
import { useLocation } from 'react-router-dom';


const BackgroundGalaxy = () => {
  const {pathname} = useLocation();
  return (
   <div className={styles.Container}>
     <video src={pathname==="/" ? backgroundLogin : background } autoPlay muted loop className={styles.Background}/>
   </div>
  )
}

export default BackgroundGalaxy