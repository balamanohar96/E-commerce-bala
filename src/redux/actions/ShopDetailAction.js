import axios from "axios";

export const PRODUCT_DETAILS = "PRODUCT_DETAILS";
export const PRODUCT_DETAILS_SUCCESS = "PRODUCT_DETAILS_SUCCESS";
export const PRODUCT_DETAILS_ERROR = "PRODUCT_DETAILS_ERROR";

export const getSingleProduct = (id) => {
  return async function (dispatch) {
    dispatch({ type: PRODUCT_DETAILS });
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      const single = await res.data;
      dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: single });
    } catch (err) {
      dispatch({ type: PRODUCT_DETAILS_ERROR, payload: err });
    }
  };
};
