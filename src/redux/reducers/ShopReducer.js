import { GET, SUCCESS, ERROR } from "../actions/ShopAction";

const initialState = {
  products: [],
  error: "",
  loading: false,
};

export const ShopReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET:
      return {
        ...state,
        loading: true,
      };

    case SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };

    case ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
