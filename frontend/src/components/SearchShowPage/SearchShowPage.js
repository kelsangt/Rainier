import { useSelector } from "react-redux";
import { fetchSearchResults } from "../../store/search";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import ItemsNotFound from "../ItemsNotFound";
import { fetchAllReviews } from "../../store/reviews";
import SearchShowItem from "./SearchShowItem";
import { useState } from "react";
import loading from '../../images/loading.gif';

const Search = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        const query = history.location.search.split("=")[1];
        dispatch(fetchSearchResults(query))
            .then(()=> setInitialized(true))
            .catch(() => setInitialized(true));
    }, [dispatch, history.location.search]);

    const searchResults = useSelector((state) => state.searchResults );

    if(!initialized){
        return <div id="loadingDiv">
            <img alt="loadingIcon" id="loadingIcon" src={loading}></img>
        </div>
    }
    
    if(Object.keys(searchResults).length === 0){
        return <ItemsNotFound />
    }

    

    return(
        <>
        <div id="fillerDiv"></div>
        <div id="productsIndexDiv">
            <ul id="productsIndexList">
                {Object.values(searchResults).map((product) => {
                    return(
                        <li key={product.id}>
                            <SearchShowItem product={product}/> 
                        </li>
                    )
                })}
            </ul>
        </div>
        </>
    );
}
export default Search;