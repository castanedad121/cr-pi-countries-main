import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store';

import Background from "./components/Background/Background.jsx";
import Footer from "./components/Footer/Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <Background />
      <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
ReactDOM.createRoot(document.getElementById("footer")).render(
  <Footer />
);
