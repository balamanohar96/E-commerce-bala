//contributors venkateswara rao

//venkateswara Rao task start
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
export const GET_NUMBER_CART = 'GET_NUMBER_CART';
export const ADD_CART = 'ADD_CART' ;
export const UPDATE_CART = 'UPDATE_CART';
export const DELETE_CART = 'DELETE_CART';
/*GET NUMBER CART*/
export function GetNumberCart(){
    return{
        type:'GET_NUMBER_CART'
    }
}


//Add to card item passing item info with payload
export function AddCart(payload){
    return {
        type:'ADD_CART',
        payload
    }
}

// deleted the item in card 
export function DeleteCart(payload){
    return{
        type:'DELETE_CART',
        payload
    }
}

//increase the quantity of existing item
export function IncreaseQuantity(payload){
    return{
        type:'INCREASE_QUANTITY',
        payload
    }
}

//decrese the quantity of exisiting item
export function DecreaseQuantity(payload){
    return{
        type:'DECREASE_QUANTITY',
        payload
    }
}

//venkateswara Rao task end

