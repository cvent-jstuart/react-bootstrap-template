import { combineReducers } from "redux";

import a from "./aReducer";
import b from "./bReducer";

export default combineReducers({
  a,
  b
})
