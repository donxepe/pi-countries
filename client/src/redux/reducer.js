import { GET_COUNTRIES } from "./actions";

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
        default:
            return state;
        
    }
}