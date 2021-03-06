import React from "react";
import "./App.css";
import LandingPage from "./landing-page/Landing-Page";
import { Route } from "react-router-dom";
import MainPage from "./main-page/Main-Page";

class App extends React.Component {
  componentDidMount() {
    console.log(
      "%cHey welcome to my console!",
      " font-weight:bold; font-size:30px;text-shadow: 1px 1px 2px;",
    )
    console.log(
      "%cIm still working on the error above(maybe below), I try to keep this place clean.",
      "font-weight:bold; font-size:15px"
    );
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
