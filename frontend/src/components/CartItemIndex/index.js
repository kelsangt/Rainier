import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchAllCartItems } from '../../store/cart_items';
import CartItemIndexItem from './CartItemIndexItem';
import { getCartItems } from '../../store/cart_items';
import './CartItemIndex.css'

const CartItemIndex = props => {
    const cart_items = useSelector(getCartItems);
    // const cart_items = useSelector(state => Object.values(state.cart_items))
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchAllCartItems())
    }, [dispatch]);

    return(
        <>
        <div id="fillerDiv"></div>
        <div id="cartItemsIndexDiv">
            <ul id="cartItemsIndexList" className='cartItemsList'>
                {cart_items.map((cart_item) =>{
                    return (
                        <li key={cart_item.id}>
                            <CartItemIndexItem cart_item={cart_item}/>
                        </li>
                    )
                })}
            </ul>

        </div>
        </>
    )
}

export default CartItemIndex;