import csrfFetch from "./csrf";
import { retrieveProduct, retrieveProducts } from "./products";
import { REMOVE_USER } from "./session";

export const RETRIEVE_CART_ITEM = 'RETRIEVE_CART_ITEM'
export const RETRIEVE_CART_ITEMS = 'RETRIEVE_CART_ITEMS'
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'

const retrieveCartItems = cartItems => {
    return {
        type: RETRIEVE_CART_ITEMS,
        cartItems
    }
}

const retrieveCartItem = cartItem => {
    return {
        type: RETRIEVE_CART_ITEM,
        cartItem
    }
}

const removeCartItem = cartItemId => {
    return {
        type: REMOVE_CART_ITEM,
        cartItemId
    }
}

export const getCartItem = cartItemId => state => {
    return state?.cartItems ? state.cartItems[cartItemId] : null;
}

export const getCartItems = state => {
    return state?.cartItems ? Object.values(state.cartItems) : [];
}

export const fetchAllCartItems = () => async dispatch => {
    const res = await csrfFetch('/api/cart_items')

    if(res.ok){
        const data = await res.json()
        dispatch(retrieveCartItems(data.cartItems))
        dispatch(retrieveProducts(data.products))
    }
}

export const fetchCartItem = cartItemId => async (dispatch) => {
    const res = await csrfFetch(`/api/cart_items/${cartItemId}`);

    if (res.ok){
        const data = await res.json();
        dispatch(retrieveCartItem(data.cartItem));
        dispatch(retrieveProduct(data.product));
    }
}

export const createCartItem = cartItem => async (dispatch) => {
    const res = await csrfFetch('/api/cart_items/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cartItem)
    });

    if(res.ok){
        const data = await res.json();
        dispatch(retrieveCartItem(data.cartItem));
        dispatch(retrieveProduct(data.product));

    }
}

export const updateCartItem = cartItem => async (dispatch) => {
    const res = await csrfFetch(`/api/cart_items/${cartItem.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(cartItem)
    });

    if(res.ok){
        const data = await res.json();
        dispatch(retrieveCartItem(data.cartItem));
        dispatch(retrieveProduct(data.product))
    }
}

export const deleteCartItem = cartItemId => async (dispatch) => {
    const res = await csrfFetch(`/api/cart_items/${cartItemId}`, {
        method: 'DELETE'
    });
    
    if(res.ok){
        dispatch(removeCartItem(cartItemId));
    }
}

const cartItemReducer = (state ={}, action) => {
    switch(action.type){
        case RETRIEVE_CART_ITEMS:
            return {...state, ...action.cartItems};
        case RETRIEVE_CART_ITEM:
            return { ...state, [action.cartItem.id]: action.cartItem };
        case REMOVE_CART_ITEM:
            const newState = { ...state };
            delete newState[action.cartItemId];
            return newState;
        case REMOVE_USER:
            return {};
        default:
            return state;
    }
}

export default cartItemReducer;