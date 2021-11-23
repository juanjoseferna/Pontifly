import { SET_MESSAGE, SET_MODAL} from "../Actions/types";

const INITIAL_STATE = {
    message: 'Este mensaje viene del estado global de Redux',
    modal: null
};

const uiReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_MESSAGE:
            return {
                ...state,
                message: action.payload.message
            };

        case SET_MODAL:
            return {
                ...state,
                modal: action.payload.modal
            };

        default:
            return state;
    }
}

export default uiReducer;