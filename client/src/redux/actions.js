import axios from 'axios';

export const GET_COUNTRIES = "GET COUNTRIES";
export const API_GET = "http://localhost:3001/countries";
export const GET_DETAIL = "GET DETAIL"
export const GET_ACTIVITIES = "GET_ACTIVITIES"
export const ID_GET = "http://localhost:3001/countries/"
export const AC_GET = "http://localhost:3001/activity"
export const FILTER = 'FILTER';
export const AC_FILTER = 'AC_FILTER'
export const SORT = 'SORT';
export const SEARCH = 'SEARCH';

export function obtener(){
    return async function request(dispatch){
        let apiRequest = await axios.get(API_GET)
        return dispatch({
            type: GET_COUNTRIES, 
            payload: apiRequest.data
        })
    }
}

export function search(cName){
    return async (dispatch) => {
        let apiResponse = await axios.get(`${API_GET}?name=${cName}`)
        .catch(console.error)
        return dispatch({
            type: SEARCH,
            payload: apiResponse ? apiResponse.data : []
        })
    }
}

export function getDetails(countryID){
    return async function request(dispatch){
        let apiResponse = await axios.get(ID_GET + countryID)
        return dispatch({
            type: GET_DETAIL, 
            payload: apiResponse.data
        })
    }
}

export function getActivities(){
	return async function request(dispatch){
		let apiResponse = await axios.get(AC_GET)
		return dispatch({
			type: GET_ACTIVITIES,
			payload: apiResponse.data
		})
	}
}

export function activityFilter(value){
    return (dispatch) => dispatch({
        type: AC_FILTER,
        payload: value 
    })
}

export function filter(value){
    return (dispatch) => {
        dispatch({
            type: FILTER, 
            payload: value
        })
    }

}

export function sort(value){
    return (dispatch) => {
        dispatch({
            type: SORT, 
            payload: value 
        })
    }
}
