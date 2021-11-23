import axios from "axios";

import {SET_VUELOS} from "./types";


export const getVuelos = () => async (dispatch) => {
    const url = 'http://localhost:5000/Vuelos';
    axios.get(url).then(response => {

        const vuelos = response.data.data;

        console.log(response)
        dispatch({
            type: SET_VUELOS,
            payload: { vuelos }
        });
    })
    .catch(err => {
        console.log(err)
    });
}