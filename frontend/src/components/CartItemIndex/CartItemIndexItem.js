import './CartItemIndexItem.css'
import { getProduct } from '../../store/products'
import { useDispatch, useSelector } from 'react-redux';
import { deleteCartItem, updateCartItem } from '../../store/cart_items';
import { useState } from 'react';

const CartItemIndexItem = (({cartItem})=> {
    const product = useSelector(getProduct(cartItem.productId));
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);


    const [quantity, setQuantity] = useState(cartItem.productQuantity);

    if(!product) return null

    const deleteHandler = (e) => {
        e.preventDefault();
        dispatch(deleteCartItem(cartItem.id));
    }

    const quantityChangeHandler = (e) => {
        const id = cartItem.id;
        const userId = sessionUser.id;
        const productId = product.id;
        const productQuantity = (parseInt(e.currentTarget.value));
        const updatedProduct = {id, productQuantity, userId, productId}
        setQuantity(e.target.value);
        dispatch(updateCartItem(updatedProduct))
    }

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
            <select value={quantity} name="quantityCartItem" id="quantityCartItem" onChange={quantityChangeHandler}>
                <option value="1">1</option> 
                <option value="2">2</option> 
                <option value="3">3</option> 
                <option value="4">4</option> 
                <option value="5">5</option> 
            </select>
            <span id="deleteLink" onClick={deleteHandler}>| Delete |</span>
        
            {/* <a href="/login">Save For Later</a> */}
        </div>
        <div id="cartItemLine"></div>
        </>
    )
})

export default CartItemIndexItem;