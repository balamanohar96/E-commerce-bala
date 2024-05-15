import axios from "axios";

export const GET = "GET";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";

export const fetchData = () => {
  return async function (dispatch) {
    dispatch({ type: GET });
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      const products = await response.data;
      dispatch({ type: SUCCESS, payload: products });
    } catch (err) {
      dispatch({ type: ERROR, payload: err });
    }
  };
};
