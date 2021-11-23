import {FILTER_VUELOS, SET_VUELOS} from "../Actions/types";

const INITIAL_STATE = {
    vuelos: []
}


const vuelosReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_VUELOS:
            return {
                ...state,
                vuelos: action.payload.vuelos
            }
        default:
            return state;
    }
}

export default vuelosReducer;