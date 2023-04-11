import csrfFetch from "./csrf";

export const RETRIEVE_PRODUCTS = 'RETRIEVE_PRODUCTS'
export const RETRIEVE_PRODUCT = 'RETRIEVE_PRODUCT'

export const retrieveProducts = products => {
    return {
        type: RETRIEVE_PRODUCTS,
        products 
    }
}

const retrieveProduct = product => {
    return {
        type: RETRIEVE_PRODUCT,
        product
    }
}

export const getProduct = productId => state => {
    return state?.products ? state.products[productId] : null;
}

export const fetchAllProducts = () => async (dispatch) => {
    const res = await csrfFetch('/api/products')

    if(res.ok){
        const data = await res.json()
        dispatch(retrieveProducts(data))
    }
}

export const fetchProduct = productId => async (dispatch) => {
    const res = await csrfFetch(`/api/products/${productId}`);

    if (res.ok){
        const data = await res.json();
        dispatch(retrieveProduct(data));
    }
}

const productReducer = (state ={}, action) => {
    switch(action.type){
        case RETRIEVE_PRODUCTS:
            return {...state, ...action.products};
        case RETRIEVE_PRODUCT:
            return { ...state, [action.product.id]: action.product };
        default:
            return state;
    }
}

// testing

export default productReducer;