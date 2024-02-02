import { GET, SUCCESS, ERROR } from "../actions/ShopAction"


export const ShopReducer = (state = { products: [] }, action) =>{
    switch(action.type) { 
        case GET:
            return {
                ...state,
                loading: true
            }
        case SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload
            }
        case ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state 
    }
}