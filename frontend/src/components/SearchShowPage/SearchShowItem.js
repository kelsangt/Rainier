import { useSelector } from "react-redux";
import primeLogo from '../../images/primeLogo.png';

const SearchShowItem = (({product}) => {
    let reviewsAverage = 0;
    let reviewsCount;

    const reviews = product.reviews;
    if(reviews){
        let reviewsSum = 0;
        reviewsCount = Object.keys(reviews).length;
        const values = Object.values(reviews);
        values.forEach((value)=> {
            if(value && product){
                reviewsSum += value.rating;
            }
        })
        
        reviewsAverage = reviewsSum / reviewsCount;
    } 
    return (
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
                <h1>{reviewsAverage} </h1>
                
                <h1 id="reviewsCountH1">{reviewsCount}</h1>
            </h1>
            <h1 id="indexProductPrice">
                ${product.price}
            </h1>
            <img src={primeLogo} alt="primeLogo" className="primeLogoImage" /> 
        </div>
    )
})

export default SearchShowItem;