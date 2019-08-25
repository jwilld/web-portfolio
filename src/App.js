import React from "react";
import "./App.css";
import LandingPage from "./landing-page/Landing-Page";
import { Route } from 'react-router-dom'
import MainPage from './main-page/Main-Page'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Route exact path="/" component={LandingPage} />
        <Route  path='/main' component = {MainPage}/>
      </div>
    );

  }
}

export default App;
