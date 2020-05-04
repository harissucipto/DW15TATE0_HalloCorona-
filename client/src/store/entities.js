import { combineReducers } from "redux";
import articlesReducer from "./articles";
import consultationsReducer from "./consultations";

export default combineReducers({
  articles: articlesReducer,
  consultations: consultationsReducer,
});
