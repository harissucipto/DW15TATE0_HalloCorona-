import { combineReducers } from "@reduxjs/toolkit";

import signinReducer from "./signin";
import signupReducer from "./signup";

export default combineReducers({
  signin: signinReducer,
  signup: signupReducer,
});
