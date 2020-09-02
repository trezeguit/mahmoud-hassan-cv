import { combineReducers } from "redux";
import { withReduxStateSync } from "redux-state-sync";

import test from "./test";

const rootReducer = combineReducers({
  test,
});

export default withReduxStateSync(rootReducer);
