import { FILTER, SORT, GET_COUNTRIES, SEARCH, GET_DETAIL } from "./actions";

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
        
        case GET_DETAIL:
            return {
                ...state, 
                detail: action.payload
            }

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

        case SORT:
            if (action.payload === "Default") {
                return {
                    ...state,
                    filtered: state.filtered.slice().sort( (a,b) => {
                        if (a.name > b.name) return 1
                        return -1
                    })
                }
            } else if (action.payload === "aDesc") {
                return {
                    ...state,
                    filtered: state.filtered.slice().sort( (a,b) => {
                        if (a.name > b.name) return -1
                        return 1
                    })
                }
            } else if (action.payload === "pAsc") {
                return {
                    ...state,
                    filtered: state.filtered.slice().sort( function (a,b){
                        if (a.population > b.population) return 1
                        return -1
                    })
                }
            } else if (action.payload === 'pDesc') {
                return {
                    ...state,
                    filtered: state.filtered.slice().sort( function (a,b){
                        if (a.population > b.population) return -1
                        return 1
                    })
                }
            } else {
                return {
                    ...state
                }
            }
        case SEARCH: 
            if (action.payload){
                return {
                    ...state, 
                    filtered: action.payload
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