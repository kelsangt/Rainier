import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { fetchProduct, getProduct } from "../../store/products";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import './ProductShow.css'
import { createCartItem } from "../../store/cart_items";
import { useState } from "react";
import NotFound from '../NotFound/index';
import ReviewIndex from "../ReviewIndex";
import ReviewCreationForm from "../ReviewCreationForm";
import { fetchAllReviews } from "../../store/reviews";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import loading from '../../images/loading.gif';


const ProductShow = () => {
    const { productId } = useParams();
    const product = useSelector(getProduct(productId));
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const history = useHistory();
    const product_id = parseInt(productId);
    const [product_quantity, setQuantity] = useState(1);
    const [initialized, setInitialized] = useState(false);
   
    let reviewsSum = 0;
    let reviewsCount = 0;
    let reviewsAverage = 0;

    useEffect(()=>{
        dispatch(fetchProduct(productId))
            .then(()=> setInitialized(true))
            .catch(() => setInitialized(true));
        dispatch(fetchAllReviews());
    }, [dispatch, productId])


    const reviews = useSelector(state => Object.values(state.reviews));
    reviews.forEach(review => {
        if(review && product){
            if (review.productId === product.id){
                reviewsSum += review.rating;
                reviewsCount += 1;
            } 
        }
    })

    if(reviewsCount > 0){
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

    if(!initialized){
        return <div id="loadingDiv">
            <img alt="loadingIcon" id="loadingIcon" src={loading}></img>
        </div>
    }

    let descriptionArray = [];

    if(product && product.description){
        descriptionArray = product.description.split(".");
    } else {
        return <NotFound />
    }
    

    const handleAddToCart = (e) => {
        e.preventDefault();
        
        if (!sessionUser){
            history.push(`/login`)
        } else {
            const user_id = sessionUser.id;
            const finalProduct = {product_quantity, user_id, product_id};
            dispatch(createCartItem(finalProduct));
            history.push(`/cart`);
        }
    }

    const updateSelector = (e) => {
        setQuantity(parseInt(e.currentTarget.value));
    }

    let reviewsAmount; 

    if(reviewsCount === 1){
        reviewsAmount = (
            <h1>{reviewsCount} rating</h1>
        )
    } else {
        reviewsAmount = (
            <h1>{reviewsCount} ratings</h1>
        )
    }

    let reviewForm;

    if(sessionUser){
        reviewForm = (
            <a href={`/createReview/${product.id}`}>
                <button id="accountCreation">Write a customer review</button>
            </a>
        )
    } else {
        reviewForm = (
            <a href={`/login`}>
                <button id="accountCreation">Write a customer review</button>
            </a>
        )
    }

    return (
        <>
          <div id="fillerDiv"></div> 
          <div id="showMainDiv">
                <div id="imageDiv">
                    <img id="showImage" src={product.photoUrl} alt=""/>
                </div>
                <div id="descriptionDiv">
                    <h1 id="productTitle">{product.name}</h1>
                    
                    <div id="ratingsDiv">
                        <h1 id="productRatings">{reviewsAverage}</h1>
                        <h1 id="stars">{stars}</h1>
                        <h1 id="reviewsAmountH1">{reviewsAmount}</h1>
                    </div>
                    <div id="lineSeparator"></div>
                    <h1 id="productPrice1">${product.price}</h1>
                    <span id="freeReturns">FREE Returns</span>
                    <ul id="descriptionList">
                        {descriptionArray.map((sentence)=>{
                            return (
                                <li id="sentence" key={Math.random()}>
                                    {sentence}
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div id="transactionDiv">
                    <h1 id="productPrice2">${product.price}</h1>
                    <span id="freeReturns">FREE Returns</span>
                    <span id="freeDelivery">FREE delivery</span>
                    <span id="inStock">In Stock</span>

                    <form onSubmit={handleAddToCart} id="addToCartForm">
                        <div id="quantityDiv">
                            <span id="quantity1">Qty:</span>
                            <select name="product_quantity" id="quantitySelector" form="addToCartForm" onChange={updateSelector}>
                                <option value="1">1</option> 
                                <option value="2">2</option> 
                                <option value="3">3</option> 
                                <option value="4">4</option> 
                                <option value="5">5</option> 
                            </select>
                        </div>
                        <button type="submit" id="addToCart">Add to Cart</button>
                    </form>
                    <button id="buyNow">Buy Now</button>
                    <div id="paymentDiv">
                        <span id="payment">Payment</span>
                        {/* <a href="/" id="secureTransaction">Secure transaction</a> */}
                        <span id="secureTransaction">Secure transaction</span>
                    </div>
                    <div id="shipsFromDiv">
                        <span id="shipsFrom">Ships from</span>
                        <span id="rainierSiteLink">Rainier.com</span>
                    </div>
                    <div id="soldByDiv">
                        <span id="soldBy">Sold by</span>
                        <span id="rainierSiteLink">Rainier.com</span>
                    </div>
                    <div id="returnsDiv">
                        <span id="returns">Returns</span>
                        {/* <a href="/" id="eligibleForReturn">Eligible for Return, Refund or Replacement within 30 days of receipt</a> */}
                        <span id="eligibleForReturn">Eligible for Return, Refund or Replacement within 30 days of receipt</span>
                    </div>
                
                </div>
            
            </div>
            <div id="separatorLine"></div>
            <div id="reviewsUpperDiv">
                <div id="customerReviewsDiv">
                    <h1>Customer Reviews</h1>
                    <div id="customerRatingsDiv">
                        <div id="customerRatingsInnerDiv">
                            <h1 id="customerStarsH1">{stars}</h1>
                            <h1 id="customerProductRatings">{reviewsAverage} out of 5</h1>
                        </div>
                        <h1 id="customerReviewsAmountH1">{reviewsAmount}</h1>
                    </div>
                </div>
                <div id="reviewEntry">
                    <h1>Review this product</h1>
                    <h2 id="shareYourThoughts">Share your thoughts with other customers</h2>
                    <div id="createReviewDiv">
                        {reviewForm}
                    </div>
                </div>
            </div>
            <div id="separatorLine"></div>
            <ReviewIndex product={product}/>
        </>
    )
}

export default ProductShow;