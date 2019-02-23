import { combineReducers } from "redux";
import api from "./api";

const reducers = combineReducers({
  apiResponses: api
});

export default reducers;
