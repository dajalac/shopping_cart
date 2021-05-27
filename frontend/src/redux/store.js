import {createStore, combineReducers,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import {cartReducer} from './reducers/cartReducer';
import{getProductDetailsReducer,getProductsReducer} from './reducers/ProductReducers'

const reducer = combineReducers({
    cart: cartReducer,
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer
});

const middleware = [thunk];

//for the value of the cart be saved while refresh the screen
const cartItemsInLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const INITIAL_STATE = {
  cart: {
    cartItems: cartItemsInLocalStorage,
  },
};

const store = createStore (
    reducer,
    INITIAL_STATE,
    composeWithDevTools(applyMiddleware(...middleware)) /**composeWithDevTools gives you acess in chrome f12 */
);

export default store; 


