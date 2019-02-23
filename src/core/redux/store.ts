import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";
import apiClient from "../apiClient/APIReduxMiddleware";

let customCompose = composeWithDevTools(applyMiddleware(apiClient));

const store = createStore(reducers, undefined, customCompose);
export default store;