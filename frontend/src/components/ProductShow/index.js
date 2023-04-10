import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { fetchProduct, getProduct } from "../../store/products";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import './ProductShow.css'


const ProductShow = () => {
    const { productId } = useParams();
    const product = useSelector(getProduct(productId));
    const dispatch = useDispatch();
    
    

    useEffect(()=>{
        dispatch(fetchProduct(productId))
    }, [dispatch, productId])

    if(!product) return null;

    const descriptionArray = product.description.split(".");

    return (
        <>
        <div id="fillerDiv"></div>
        <div id="showMainDiv">
            <div id="imageDiv">
                <img id="showImage" src={product.photoUrl} alt=""/>
            </div>
            <div id="descriptionDiv">
                <h1 id="productTitle">{product.name}</h1>
                <h1 id="productRatings">Ratings</h1>
                <div id="lineSeparator"></div>
                <h1 id="productPrice1">${product.price}</h1>
                <span id="freeReturns">FREE Returns</span>
                <ul id="descriptionList">
                    {descriptionArray.map((sentence)=>{
                        return (
                            <li id="sentence">
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
                <div id="quantityDiv">
                    <span id="quantity">Qty:</span>
                    <select name="quantitySelector" id="quantitySelector">
                        <option value="one">1</option> 
                        <option value="two">2</option> 
                        <option value="three">3</option> 
                        <option value="four">4</option> 
                        <option value="five">5</option> 
                    </select>
                </div>

                <button id="addToCart">Add to Cart</button>
                <button id="buyNow">Buy Now</button>
                <div id="paymentDiv">
                    <span id="payment">Payment</span>
                    <a href="/" id="secureTransaction">Secure transaction</a>
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
                    <a href="/" id="eligibleForReturn">Eligible for Return</a>
                </div>
                
            </div>
        </div>
        </>
    )

}

export default ProductShow;