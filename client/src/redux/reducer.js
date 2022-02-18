import { FILTER, GET_COUNTRIES } from "./actions";

const initialState = {
    countries: [],
    filtered: [],
    detail: {},
    activities: []
}

export default function rootReducer(state = initialState, action){
    switch (action.type){
        case GET_COUNTRIES:
            return {
                ...state, 
                countries: action.payload,
                filtered: action.payload
            };
        case FILTER:
            if (action.payload === "Default") {
                return {
                    ...state, 
                    filtered: state.countries,
                }
            } else if (action.payload){
                return {
                    ...state, 
                    filtered: state.countries.filter(
                        c => c.continent === action.payload
                    )
                }
            } else {
                return {
                    ...state
                }
            }
        default:
            return state;
        
    }
}