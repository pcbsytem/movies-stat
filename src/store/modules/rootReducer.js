import { combineReducers } from "redux";

import card from "./card/reducer";
import home from "./home/reducer";

export default combineReducers({
  card,
  home,
});
