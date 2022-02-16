import axios from 'axios';

export const GET_COUNTRIES = "GET COUNTRIES";
export const API_GET = "http://localhost:3001/countries";

export function obtener(){
    return async function request(dispatch){
        let apiRequest = await axios.get(API_GET)
        return dispatch({
            type: GET_COUNTRIES, 
            payload: apiRequest.data
        })
    }
}