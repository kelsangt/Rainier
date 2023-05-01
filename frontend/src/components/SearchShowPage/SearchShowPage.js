import { useSelector } from "react-redux";
import { fetchSearchResults } from "../../store/search";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import primeLogo from '../../images/primeLogo.png'
import ItemsNotFound from "../ItemsNotFound";

const Search = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        const query = history.location.search.split("=")[1];
        dispatch(fetchSearchResults(query))
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
                            <div id="productIndex" key={product.id}>
                                <a id="productShowAnchor" href={`/products/${product.id}`}>
                                    <div id="indexImageDiv">
                                        <img id="indexImage" src={product.photoUrl} alt=""/>
                                    </div>
                                </a>
                                <a id="productShowAnchor" href={`/products/${product.id}`}>
                                    <h1 id="indexProductName">
                                        {product.name}
                                    </h1>
                                </a>
                                <h1 id="indexProductReview">
                                    Ratings 
                                </h1>
                                <h1 id="indexProductPrice">
                                    ${product.price}
                                </h1>
                                <img src={primeLogo} alt="primeLogo" className="primeLogoImage" /> 
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
        </>
    );
}
export default Search;