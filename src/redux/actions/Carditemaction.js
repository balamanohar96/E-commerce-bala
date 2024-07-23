//contributors venkateswara rao

//venkateswara Rao task start
export const INCREASE_QUANTITY = "INCREASE_QUANTITY";
export const DECREASE_QUANTITY = "DECREASE_QUANTITY";
export const ADD_CART = "ADD_CART";
export const DELETE_CART = "DELETE_CART";

//Add to card item passing item info with payload
export function AddCart(payload) {
  return {
    type: ADD_CART,
    payload,
  };
}

// deleted the item in card
export function DeleteCart(payload) {
  //!payload is index of product in array
  return {
    type: DELETE_CART,
    payload,
  };
}

//increase the quantity of existing item
export function IncreaseQuantity(payload) {
  //!payload is index of product in array
  return {
    type: INCREASE_QUANTITY,
    payload,
  };
}

//decrese the quantity of exisiting item
export function DecreaseQuantity(payload) {
  //!payload is index of product in array
  return {
    type: DECREASE_QUANTITY,
    payload,
  };
}

//venkateswara Rao task end
