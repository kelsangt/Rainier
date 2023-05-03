import { useSelector } from "react-redux";
import { fetchSearchResults } from "../../store/search";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import ItemsNotFound from "../ItemsNotFound";
import { fetchAllReviews } from "../../store/reviews";
import SearchShowItem from "./SearchShowItem";

const Search = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        const query = history.location.search.split("=")[1];
        dispatch(fetchSearchResults(query));
        // dispatch(fetchAllReviews());
    }, [dispatch, history.location.search]);

    const searchResults = useSelector((state) => state.searchResults );


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