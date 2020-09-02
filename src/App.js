import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./View/Home/Home";
import Register from "./View/Register/Register";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path={"/Home"} exact component={Home}></Route>
          <Route path={"/Register"} exact component={Register}></Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
