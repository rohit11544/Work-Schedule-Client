import { combineReducers } from "redux";
import workReducer from "./work";

export default combineReducers({
  work: workReducer,
});
