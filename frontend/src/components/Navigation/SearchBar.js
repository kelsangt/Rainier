import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState, useEffect } from "react";
import { fetchSearchResults } from "../../store/search";

const SearchBar = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const[searchText, setSearchText] = useState("");
    
    async function searchHandler(e) {
        e.preventDefault();
        const query = e.target.value;
        await setSearchText(query);
        dispatch(fetchSearchResults(query))
    }

    function searchSubmitHandler(e) {
        e.preventDefault();
        if(searchText.length > 0){
            history.push(`/search?keyword=${searchText}`);
        }
    }

    return (
        <>
            <input type="text" onChange={searchHandler} placeholder="Search Rainier"></input>
            <button onClick={searchSubmitHandler}>search</button>
        </>
    )
}

export default SearchBar;