import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import { fetchSearchResults } from "../../store/search";
import magnifyingGlass from '../../images/magnifying_glass.png';
import './SearchBar.css'

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

    function searchSubmitHandlerEnter(e) {
        if(e.key === "Enter"){
            e.preventDefault();
            if(searchText.length > 0){
                history.push(`/search?keyword=${searchText}`);
            }
        }
    }

    return (
        <>
            <div id="searchBarDiv">
                <div id="innerSearchBarDiv">
                    <input id="searchBar" type="text" onChange={searchHandler} onKeyDown={searchSubmitHandlerEnter} placeholder="Search Rainier"></input>
                </div>
            </div>
            <div id="magnifyingGlassDiv">
                <button id="searchButton" onClick={searchSubmitHandler}><img src={magnifyingGlass} alt="magnifyingGlassIcon" className="magnifyingGlassIcon" /></button>
            </div>
           
        </>
    )
}

export default SearchBar;