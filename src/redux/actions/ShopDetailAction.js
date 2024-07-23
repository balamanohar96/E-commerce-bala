export const PRODUCT_DETAILS_LOAD = "PRODUCT_DETAILS_LOAD";
export const PRODUCT_DETAILS_SUCCESS = "PRODUCT_DETAILS_SUCCESS";
export const PRODUCT_DETAILS_ERROR = "PRODUCT_DETAILS_ERROR";

export function productDetailsStartLoad() {
  return {
    type: PRODUCT_DETAILS_LOAD,
  };
}

export function productDetailsSuccess(payload) {
  return {
    type: PRODUCT_DETAILS_SUCCESS,
    payload,
  };
}

export function productDetailsError(payload) {
  return {
    type: PRODUCT_DETAILS_ERROR,
    payload,
  };
}
