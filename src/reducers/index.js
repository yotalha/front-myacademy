import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import userLogin from "./userLogin";
import { combineReducers } from "redux";


const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  userLogin
})

export default allReducers;