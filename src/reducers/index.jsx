import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import history from "../utils/history.jsx";
import category from "./category.jsx";

export default combineReducers({
  category,
  router: connectRouter(history),
});
