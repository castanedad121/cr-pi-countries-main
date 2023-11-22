//! Imports for Routes
import { Route, Routes } from "react-router-dom";

//! Import proctected Routes
import ProtectedRoute from "./utils/ProtectedRoute";

//! Import PhatRoutes
import PATHROUTES from "./helpers/PathRoutes.helper";

//! Imports views
import Home from "./views/home/home";
import About from "./views/about/about";
import Landing from "./views/landing/landing";
import Detail from "./views/detail/detail";
import Create from "./views/create/create";

//! Import Style
import "./App.css";
import { useSelector } from "react-redux";
import Error from "./views/error/Error";

const { LANDING, HOME, ABOUT, DETAIL, FORM } = PATHROUTES;

function App() {
  const access = useSelector(state => state.access)
  return (
    <div>
      <Routes>
        <Route path={LANDING} element={<Landing />} />
        <Route element={<ProtectedRoute access={access}/>}>
          <Route path={HOME} element={<Home />} />
          <Route path={ABOUT} element={<About />} />
          <Route path={DETAIL} element={<Detail />} />
          <Route path={FORM} element={<Create />} />
        </Route>
        <Route path={'*'} element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
