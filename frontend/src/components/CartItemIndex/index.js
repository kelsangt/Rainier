import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchAllCartItems } from '../../store/cart_items';
import CartItemIndexItem from './CartItemIndexItem';
import './CartItemIndex.css'
// import { getProduct } from '../../store/products';

const CartItemIndex = props => {
    const cartItems = useSelector(state => Object.values(state.cartItems))
    const products = useSelector(state => Object.values(state.products))
    const dispatch = useDispatch();

    let subTotal = 0.00;

    const subtotalHandler = cartItems.forEach(cartItem => {
        if(cartItem){
            products.forEach(product => {
                if(cartItem.productId === product.id){
                    let val = (cartItem.productQuantity * product.price);
                    subTotal += Math.round(val)
                } 
            })
        }
    })

    useEffect(()=>{
        dispatch(fetchAllCartItems())
    }, [dispatch]);


    return(
        <>
        {/* <div id="fillerDiv"></div> */}
        <div id="cartItemsIndexDiv">
            <div id="cartItemsIndexDivInner">
                <ul id="cartItemsIndexList" className='cartItemsList'>
                    <div id="titleAndPrice">
                        <div id="cartTitle">
                            <span id="shoppingCart">Shopping Cart</span>
                        </div>
                        <div id="priceTitle">
                            <h1 id="pricetitle">Price</h1>
                        </div>
                    </div>
                    {cartItems.map((cartItem) =>{
                        return (
                            <li id="cartItem" key={cartItem.id}>
                                <CartItemIndexItem cartItem={cartItem}/>
                            </li>
                        )
                    })}
                    <div id="subtotalPrice">
                        <h1>Subtotal: ${subTotal}</h1>
                    </div>  
                </ul>
            </div>
            <div id="checkoutDiv">
                <div id="subtotalCheckout">
                    <h1>Subtotal: ${subTotal}</h1>
                </div>
                <div>
                    <button id="checkoutButton">Proceed to Checkout</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default CartItemIndex;