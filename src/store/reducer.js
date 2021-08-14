import { combineReducers } from "redux";
import datesReducer from "./datesReducer";
import stocksReducer from "./stocksReducer";

export default combineReducers({
  stocks: stocksReducer,
  dates: datesReducer,
});
