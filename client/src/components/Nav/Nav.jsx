//! Import react-router-dom
import { NavLink } from "react-router-dom";

//! Import PhatRoutes
import PATHROUTES from "../../helpers/PathRoutes.helper";

//! Impoet styles
import styles from "./Nav.module.css";
import { useDispatch } from "react-redux";
import { getLogout } from "../../redux/actions";

//! Import Icons
import { SiYourtraveldottv } from "react-icons/si";
import { AiOutlineLogout } from "react-icons/ai";

const {HOME, ABOUT, FORM, LANDING} = PATHROUTES;

const Nav = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.Container}>
        <div>
      <SiYourtraveldottv className={styles.Logo}/>
        </div>
      <div className={styles.ContainerViews}>
      <NavLink
        to={HOME}
        className={({ isActive }) =>
          isActive ? styles.ButtonLinkNavActive : styles.ButtonLinkNav
        }
      >
        <button>Home</button>
      </NavLink>
      <NavLink
        to={ABOUT}
        className={({ isActive }) =>
          isActive ? styles.ButtonLinkNavActive : styles.ButtonLinkNav
        }
      >
        <button>About</button>
      </NavLink>
      <NavLink
        to={FORM}
        className={({ isActive }) =>
          isActive ? styles.ButtonLinkNavActive : styles.ButtonLinkNav
        }
      >
        <button>Create</button>
      </NavLink>
      </div>
      <div>
      <NavLink
        to={LANDING}
        className={({ isActive }) =>
          isActive ? styles.ButtonLinkNavActive : styles.ButtonLinkNav
        }
      >
      </NavLink>
        <div>
          <AiOutlineLogout className={styles.Logout} onClick={()=>{dispatch(getLogout())}}></AiOutlineLogout>
        </div>
      </div>
    </div>
  );
};

export default Nav;
