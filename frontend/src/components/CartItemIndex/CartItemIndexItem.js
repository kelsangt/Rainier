import './CartItemIndexItem.css'
import { getProduct } from '../../store/products'
import { useSelector } from 'react-redux';

const CartItemIndexItem = (({cartItem})=> {
    const product = useSelector(getProduct(cartItem.productId));
    // const sessionUser = useSelector(state => state.session.user);

    if(!product) return null

    return (
        <>
        
        <div id="cartItemIndex" key={cartItem.id}>
            <a id="productShowAnchor" href={`/products/${product.id}`}>
                <div id="indexImageDiv">
                    <img id="indexImage" src={product.photoUrl} alt=""/>
                </div>
            </a>
            <div id="cartNameDiv">
                <a id="productShowAnchor" href={`/products/${product.id}`}>
                    <h1 id="indexCartItemName">
                        {product.name}
                    </h1>
                </a>
            </div>
            <div id="cartPriceDiv">
                <h1 id="indexCartItemPrice">
                    ${product.price}
                </h1>
            </div>
            {/* <h2>
                Qty: {cartItem.productQuantity}
            </h2> */}   
        </div>
        <div id="infoDiv">Qty: 
            <select name="quantitySelectorCart" id="quantitySelectorCart">
                        <option value="one">1</option> 
                        <option value="two">2</option> 
                        <option value="three">3</option> 
                        <option value="four">4</option> 
                        <option value="five">5</option> 
            </select>
            <a id="deleteLink" href="/login">| Delete |</a>
            {/* <a href="/login">Save For Later</a> */}
        </div>
        <div id="cartItemLine"></div>
        </>
    )
})

export default CartItemIndexItem;