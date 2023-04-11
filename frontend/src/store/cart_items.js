import csrfFetch from "./csrf";
import { retrieveProducts } from "./products";

export const RETRIEVE_CART_ITEM = 'RETRIEVE_CART_ITEM'
export const RETRIEVE_CART_ITEMS = 'RETRIEVE_CART_ITEMS'
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'

const retrieveCartItems = cart_items => {
    return {
        type: RETRIEVE_CART_ITEMS,
        cart_items
    }
}

const retrieveCartItem = cart_item => {
    return {
        type: RETRIEVE_CART_ITEM,
        cart_item
    }
}

const removeCartItem = cartItemId => {
    return {
        type: REMOVE_CART_ITEM,
        cartItemId
    }
}

export const getCartItem = cartItemId => state => {
    return state?.cart_items ? state.cart_items[cartItemId] : null;
}

export const getCartItems = state => {
    return state?.cart_items ? Object.values(state.cart_items) : [];
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
        dispatch(retrieveCartItem(data));
    }
}

export const createCartItem = cart_item => async (dispatch) => {
    const res = await csrfFetch('/api/cart_items/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cart_item)
    });

    if(res.ok){
        const cart_item = await res.json();
        dispatch(retrieveCartItem(cart_item));
    }
}

export const updateCartItem = cart_item => async (dispatch) => {
    const res = await csrfFetch(`/api/cart_items/${cart_item.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(cart_item)
    });

    if(res.ok){
        const cart_item = await res.json();
        dispatch(retrieveCartItem(cart_item));
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
            return {...state, ...action.cart_items};
        case RETRIEVE_CART_ITEM:
            return { ...state, [action.cart_item.id]: action.cart_item };
        case REMOVE_CART_ITEM:
            const newState = { ...state };
            delete newState[action.cartItemId];
            return newState;
        default:
            return state;
    }
}

export default cartItemReducer;