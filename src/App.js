import React from "react";
import "./App.css";
import LandingPage from "./landing-page/Landing-Page";
import { Route } from "react-router-dom";
import MainPage from "./main-page/Main-Page";

class App extends React.Component {
  componentDidMount(){
    console.log(
      '%c Hey welcome to my console!',' font-weight:bold; font-size:20px;'
    )
  }
  render() {
    return (
      <div className="App">
        {/* <Route render={() => <Redirect to={{ pathname: "/" }} />} /> */}
        <Route exact path="/" component={LandingPage} />
        <Route path="/main" component={MainPage} />
      </div>
    );
  }
}

export default App;
