import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchAllCartItems } from '../../store/cart_items';
import CartItemIndexItem from './CartItemIndexItem';
import './CartItemIndex.css'
import { deleteCartItem } from '../../store/cart_items';
import { useState } from 'react';
import greenCheckmark from '../../images/greenCheckmark.png'


const CartItemIndex = props => {
    const cartItems = useSelector(state => Object.values(state.cartItems))
    const products = useSelector(state => Object.values(state.products))
    const dispatch = useDispatch();

    let cartContents;

    let subTotal = 0.00;

    const [checkoutSuccess, setCheckoutSuccess] = useState(false);

    cartItems.forEach(cartItem => {
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

    const checkoutHandler = (e) => {
        if(subTotal > 0.00){
            e.preventDefault();
            cartItems.forEach(cartItem => {
                if(cartItem){
                    dispatch(deleteCartItem(cartItem.id))
                }
            })
            setCheckoutSuccess(true);
        }
    }

    if (checkoutSuccess){
        cartContents = (
            <>
            <div id="checkoutSuccessDiv">
                <div id="innerCheckoutSuccessDiv">
                    <h1>Thank you for placing your order!</h1>
                    <img src={greenCheckmark} alt="greenCheckmark" className="greenCheckmarkImage" /> 
                </div>
                
            </div>
            </>
        );
    } else {
        cartContents = (
            <>
            <div id="cartItemsIndexDivInner">
                <ul id="cartItemsIndexList" className='cartItemsList'>
                    <div id="titleAndPrice">
                        <div id="cartTitle">
                            <span id="shoppingCartTitle">Shopping Cart</span>
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
                    <button id="checkoutButton" onClick={checkoutHandler}>Proceed to Checkout</button>
                </div>
            </div>
            </>
        )
    }

    return(
        <>
        <div id="cartItemsIndexDiv">
            {cartContents}
        </div>
        </>
    )
}

export default CartItemIndex;