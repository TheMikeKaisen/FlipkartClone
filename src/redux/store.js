import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

// Reducers
import { getProductsReducer, getProductDetailReducer } from './reducers/productReducer';
import {cartReducer} from './reducers/cartReducer';

const reducer = combineReducers({
    getProducts : getProductsReducer,
    getProductDetails : getProductDetailReducer,
    cart: cartReducer 
})


const middleware = [thunk];
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))

)

export default store;