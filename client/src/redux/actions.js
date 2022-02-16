import axios from 'axios';

export const GET_COUNTRIES = "GET COUNTRIES";
export const API_GET = "http://localhost:3001/countries";
export const GET_DETAIL = "GET DETAIL"
export const ID_GET = "http://localhost:3001/countries"

export function obtener(){
    return async function request(dispatch){
        let apiRequest = await axios.get(API_GET)
        return dispatch({
            type: GET_COUNTRIES, 
            payload: apiRequest.data
        })
    }
}

export function getActivities(countryID){
	return async function request(dispatch){
		let apiResponse = await axios.get(ID_GET + countryID)
		return dispatch({
			type: GET_DETAIL,
			payload: apiResponse.data
		})
	}
}
