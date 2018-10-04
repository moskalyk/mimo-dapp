// rootReducer.js
import { combineReducers } from "redux";
import profileReducer from "./profileReducer";
import web3Reducer from "./web3Reducer";

export default combineReducers({
    web3Reducer,
    profileReducer
});