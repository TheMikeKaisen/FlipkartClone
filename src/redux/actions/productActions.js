
import axios from "axios";

import * as actionTypes from '../constants/productConstant.js'


const URL = ''
export const getProducts = () => async(dispatch) => { //this is how we use a react-thunk middleware.
    try {
        const { data } = await axios.get(`${URL}/products`); // object Destructuring

        dispatch({type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data}); // it calls a reducer
    } catch(error) {
        dispatch({type: actionTypes.GET_PRODUCTS_FAIL, payload: error.message })
    }
}

export const getProductDetails = (id) => async(dispatch)=>{
    try{
        dispatch({type: actionTypes.GET_PRODUCT_DETAIL_REQUEST});
        const { data } = await axios.get(`${URL}/product/${id}`);
        dispatch({type: actionTypes.GET_PRODUCT_DETAIL_SUCCESS, payload: data});
    }catch(error){
        dispatch({type: actionTypes.GET_PRODUCT_DETAIL_FAIL, payload: error.message});
    }
}