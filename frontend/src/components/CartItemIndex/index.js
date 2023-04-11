import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchAllCartItems } from '../../store/cart_items';
import CartItemIndexItem from './CartItemIndexItem';
// import { getCartItems } from '../../store/cart_items';
import './CartItemIndex.css'

const CartItemIndex = props => {
    // const cart_items = useSelector(getCartItems);
    const cartItems = useSelector(state => Object.values(state.cartItems))
    const dispatch = useDispatch();

    // const sessionUser = useSelector(state => state.session.user);
    


    useEffect(()=>{
        dispatch(fetchAllCartItems())
    }, [dispatch]);

    // if(!sessionUser) return null

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
                </ul>
            </div>
            <div id="checkoutDiv">
                Cart Total
            </div>
        </div>
        </>
    )
}

export default CartItemIndex;