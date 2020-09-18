import React from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./View/Home/Home";
import Register from "./View/Register/Register";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/Home" />
          </Route>
          <Route path={"/Home"} exact component={Home}></Route>
          <Route path={"/Register"} exact component={Register}></Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
