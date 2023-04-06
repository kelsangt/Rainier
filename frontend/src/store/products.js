

const requestProducts = () => {
    return fetch('api/products')
}

const RETRIEVE_PRODUCTS = 'RETRIEVE_PRODUCTS';

export const retrieveProducts = products => {
    return{
        type: RETRIEVE_PRODUCTS,
        products 
    }
}

export const fetchAllProducts = () => (dispatch) => {
    return requestProducts()
        .then(res => res.json())
        .then(data => dispatch(retrieveProducts(data)));
}

const productReducer = (state ={}, action) => {
    switch(action.type){
        case RETRIEVE_PRODUCTS:
            return {...state, ...action.products}
        default:
            return state;
    }
}

export default productReducer;