import {
  PRODUCT_DETAILS_LOAD,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_ERROR,
} from "../actions/ShopDetailAction";

const initialState = {
  product: [],
  loading: false,
  error: "",
};

export const productDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_LOAD:
      return {
        ...state,
        loading: true,
      };

    case PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload,
      };

    case PRODUCT_DETAILS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
