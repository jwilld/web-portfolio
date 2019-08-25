import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faLinkedin,
  faGithubSquare,
  faInstagram,
  faTwitterSquare,
  faYoutubeSquare
} from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  fab,
  faCheckSquare,
  faCoffee,
  faFile,
  faLinkedin,
  faGithubSquare,
  faInstagram,
  faTwitterSquare,
  faYoutubeSquare
);

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
