import React from "react";
import "./App.css";
import LandingPage from "./landing-page/Landing-Page";
import { Route } from 'react-router-dom'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Route path="/" component={LandingPage} />
      </div>
    );

  }
}

export default App;
