import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faLinkedinIn,
  faGithub,
  faInstagram,
  faTwitter,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
import {
  faFile,
  faPlaneArrival
} 
from "@fortawesome/free-solid-svg-icons";
library.add(
  fab,
  faFile,
  faLinkedinIn,
  faGithub,
  faInstagram,
  faTwitter,
  faYoutube,
  faPlaneArrival
);

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
