export const RETRIEVE_REVIEW = 'RETRIEVE_REVIEW'
export const RETRIEVE_REVIEWS = 'RETRIEVE_REVIEWS'
export const REMOVE_REVIEW = 'REMOVE_REVIEW'

const retrieveReviews = reviews => {
    return {
        type: RETRIEVE_REVIEWS,
        reviews
    }
}

const retrieveReview = review => {
    return {
        type: RETRIEVE_REVIEW,
        review
    }
}

const removeReview = reviewId => {
    return {
        type: REMOVE_REVIEW,
        reviewId
    }
}

export const getReview = reviewId => state => {
    return state?.reviews ? state.reviews[reviewId] : null;
}

export const getReviews =  state => {
    return state?.reviews ? Object.values(state.reviews) : [];
}

export const fetchAllReviews = () => async dispatch => {
    const res = await csrfFetch('/api/reviews')

    if(res.ok){
        const data = await res.json()
        dispatch(retrieveReviews(data.reviews))
    }
}

export const fetchReview = reviewId => async (dispatch) => {
    const res = await csrfFetch(`/api/reviews/${reviewId}`);

    if (res.ok){
        const data = await res.json();
        dispatch(retrieveReview(data.review));
    }
}

export const createReview = review => async (dispatch) => {
    const res = await csrfFetch('/api/reviews/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(review)
    });

    if(res.ok){
        const data = await res.json();
        dispatch(retrieveReview(data.review));
    }
}

export const updateReview = review => async (dispatch) => {
    const res = await csrfFetch(`/api/reviews/${review.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(review)
    });

    if(res.ok){
        const data = await res.json();
        dispatch(retrieveReview(data.review));
    }
}

export const deleteReview = reviewId => async (dispatch) => {
    const res = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: 'DELETE'
    });
    
    if(res.ok){
        dispatch(removeReview(reviewId));
    }
}

const reviewReducer = (state ={}, action) => {
    switch(action.type){
        case RETRIEVE_REVIEWS:
            return {...state, ...action.reviews};
        case RETREIVE_REVIEW:
            return { ...state, [action.review.id]: action.review };
        case REMOVE_REVIEW:
            const newState = { ...state };
            delete newState[action.reviewId];
            return newState;
        case REMOVE_USER:
            return {};
        default:
            return state;
    }
}

export default reviewReducer;