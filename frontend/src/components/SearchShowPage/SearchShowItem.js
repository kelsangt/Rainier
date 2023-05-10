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

    let stars = [];

    for(let i = 0; i < Math.floor(reviewsAverage); i++){
        stars.push(<i id="starIcon" className="fa fa-star"></i>);
    }

    let averageDifference = reviewsAverage - Math.floor(reviewsAverage);

    if(averageDifference !== 0){
        for(let j = 0; j < Math.ceil(averageDifference); j++) {
            stars.push(<i id="starIconHalf" className="fa fa-star-half-o"></i>)
        }
    }

    let averageRemainder = 5 - Math.ceil(reviewsAverage);

    if(averageRemainder > 0 ){
        for(let k = 0; k < Math.ceil(averageRemainder); k++) {
            stars.push(<i id="starIconEmpty" className="fa fa-star-o"></i>)
        }
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
                <h1>{stars}</h1>
                
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