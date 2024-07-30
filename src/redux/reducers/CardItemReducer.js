//contributors venkateswara rao ,dinesh ,dhanaraju

import {
  ADD_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  DELETE_CART,
} from "../actions/Carditemaction.js";

const initProduct = {
  Carts: [],
};

function cardProduct(state = initProduct, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_CART:
      //checking for if this item already exits in the cart or not
      let check = false;
      state.Carts.map((item, key) => {
        if (item.id === payload.id) {
          state.Carts[key].quantity += payload.quantity;
          check = true;
        }
        return "";
      });
      //if item not in cart add the item in to cart
      if (!check) {
        let newItem = {
          id: payload.id,
          quantity: payload.quantity,
          name: payload.title,
          image: payload.image,
          price: payload.price,
        };
        state.Carts.push(newItem);
      }
      return {
        ...state,
      };

    case INCREASE_QUANTITY:
      return {
        ...state,
        quantity: state.Carts[payload].quantity++,
      };

    case DECREASE_QUANTITY:
      return {
        ...state,
        quantity: state.Carts[payload].quantity--,
      };

    case DELETE_CART:
      //Deleted the item into cart checking the id and removing product in cart
      const filteredCart = state.Carts.filter(
        (item) => item.id !== state.Carts[payload].id
      );
      return {
        ...state,
        Carts: filteredCart,
      };

    default:
      return state;
  }
}

export default cardProduct;
