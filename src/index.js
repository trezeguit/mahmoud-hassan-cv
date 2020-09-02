import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
//import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./Redux/Reducers";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path={"/Home"} component={App}></Route>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
