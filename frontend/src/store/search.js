export const GET_SEARCH_RESULTS = 'search/searchResults';

export const receiveSearchResults = searchResults => ({
    type: GET_SEARCH_RESULTS,
    searchResults
});

export const fetchSearchResults = (query) => async dispatch => {
    const res = await fetch(`/api/products/search?q=${query}`);
    const data = await res.json();
    dispatch(receiveSearchResults(data));
}

const searchReducer = (state = {}, action) => {
    switch(action.type) {
        case GET_SEARCH_RESULTS:
            if(action.searchResults.search){
                return action.searchResults.search;
            } else {
                return {};
            }
            
        default:
            return state;
    }
}

export default searchReducer;