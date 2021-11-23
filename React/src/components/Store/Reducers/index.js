import { combineReducers } from "redux";
import vuelosReducer from "./vuelos";
import uiReducer from "./ui";

const allReducers = combineReducers({
    uiReducer,
    vuelosReducer
});

export default allReducers;