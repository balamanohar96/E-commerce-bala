//contributors venkateswara rao ,dinesh ,dhanaraju

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadState } from '../LocalStorage/LocalStorage';

import rootReducer from '../rootReducer/rootReducer';
//saving the cart data in local storage
const persistedState = loadState()


const store =  createStore(rootReducer,persistedState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
export default store;