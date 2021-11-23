import { SET_MESSAGE, SET_MODAL } from "./types";


export const updateMessage =  (newMessage) => (dispatch) => {
    dispatch({
        type: SET_MESSAGE,
        payload: { message: newMessage }
    });
};

export const setModal = (modal) => (dispatch) => {
    dispatch({
        type: SET_MODAL,
        payload: { modal }
    });
};