import { combineReducers } from "redux";

import entitiesReducer from "./entities";
import uiReducer from "./ui";
import authReducer from "./auth";

export default combineReducers({
  entities: entitiesReducer,
  ui: uiReducer,
  auth: authReducer,
});
