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


const ProductShow = () => {
    const { productId } = useParams();
    const product = useSelector(getProduct(productId));
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const history = useHistory();
    const product_id = parseInt(productId);
    const [product_quantity, setQuantity] = useState(1);

    let reviewsSum = 0;
    let reviewsCount = 0;
    let reviewsAverage = 0;

    useEffect(()=>{
        dispatch(fetchProduct(productId));
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

    if(!product) return <NotFound />;

    const descriptionArray = product.description.split(".");

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
                    <h1 id="productRatings">{reviewsAverage}</h1>
                    {reviewsAmount}
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
            <div id="createReviewDiv">
                {reviewForm}
            </div>
            <ReviewIndex product={product}/>
        </>
    )
}

export default ProductShow;