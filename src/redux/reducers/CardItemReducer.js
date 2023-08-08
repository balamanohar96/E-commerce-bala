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
      //check any items in cart or not intilal check
    
      if (state.Carts.length === 0) {
        let cart = {
          id: payload.id,
          quantity: payload.quantity,
          name: payload.title,
          image: payload.image,
          price: payload.price,
        };
        state.Carts.push(cart);
      }
      //already item in card increase the quantity
      else {
        let check = false;
        state.Carts.map((item, key) => {
          if (item.id === payload.id) {
            state.Carts[key].quantity++;
            check = true;
          }
          return check;
        });
        //if item not in cart add the item in to cart
        if (!check) {
          let _cart = {
            id: payload.id,
            quantity: payload.quantity,
            name: payload.title,
            image: payload.image,
            price: payload.price,
          };
          state.Carts.push(_cart);
        }
      }
      return {
        ...state,
      };
    case INCREASE_QUANTITY:
      state.Carts[payload].quantity++;

      return {
        ...state,
      };
    case DECREASE_QUANTITY:
      let quantity = state.Carts[payload].quantity;
      if (quantity > 1) {
        state.Carts[payload].quantity--;
      }

      return {
        ...state,
      };
    case DELETE_CART:
      //Deleted the item into cart checking the id and removing product in cart
      return {
        ...state,
        Carts: state.Carts.filter((item) => {
          return item.id !== state.Carts[payload].id;
        }),
      };
    default:
      return state;
  }
}

export default cardProduct;
