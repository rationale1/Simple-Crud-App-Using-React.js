import { combineReducers } from "redux";
import crudReducer from "./crudReducer";

const rooterReducers = combineReducers({ crud: crudReducer });

export default rooterReducers;
