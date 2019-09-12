import {combineReducers} from 'redux';
import goods from './goods.js';
import cart from './cart.js';

export default combineReducers({
    goods,
    cart
})
  