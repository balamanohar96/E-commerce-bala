import { PRODUCT_DETAILS, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_ERROR } from "../actions/ShopDetailAction";

export const productDetailsReducer = (state = { product: {} }, action) => {
    switch (action.type) {
      case PRODUCT_DETAILS:
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
  