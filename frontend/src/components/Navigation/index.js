import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import rainierLogo from '../../images/rainierLogo.png'
import cart from '../../images/cart.png'
import LoginModal from '../LoginModal/index'
import ProfileModal from '../ProfileModal/index'
import SearchBar from './SearchBar';
import './Navigation.css';


function Navigation() {
  const sessionUser = useSelector(state => state.session.user);
  const cartItems = useSelector(state => Object.values(state.cartItems));
  const dispatch = useDispatch();
  
  let quantityCount = 0;

  cartItems.forEach(cartItem => {
    if(cartItem){
        quantityCount += cartItem.productQuantity;
    }
  })


  let links;
  if (sessionUser) {
    links = (
        <>
        <ProfileModal user={sessionUser}/>
            <div id="returnsOrders">
                <p>Returns <br></br> & Orders</p>
            </div>
        <NavLink to="/cart" style={{textDecoration: 'none'}}>
            <div id="shoppingCart">
                <div id="innerCartDiv">
                    <h1 id="cartCount">{quantityCount}</h1>
                    <img src={cart} alt="cartImage" className="cartImage" /> 
                </div>
                <p id="cartText">Cart</p>
            </div>
        </NavLink>
        </>
    );
  } else {
    links = (
        <>
        <LoginModal />
            <div id="returnsOrders">
                <p>Returns <br></br> & Orders</p>
            </div>
        <NavLink to="/login" style={{textDecoration: 'none'}}>
            <div id="shoppingCart">
                <div id="innerCartDiv">
                    <h1 id="cartCount">{quantityCount}</h1>
                    <img src={cart} alt="cartImage" className="cartImage" /> 
                </div>
                <p id="cartText">Cart</p>
            </div>
        </NavLink>
        </>
    );

  }


  return (
    <>
    
    <div id="navMainDiv">
        <div id="aboutLinks">
            <a href="https://github.com/kelsangt/Rainier">
                <i className="fa fa-github" id="githubLink"></i>
            </a>
            <a href="https://www.linkedin.com/in/kelsang-tsering/">
                <i className="fa fa-linkedin" id="linkedIn"></i>
            </a>
        </div>
        <div id="navLogo">
            <NavLink exact to="/" style={{textDecoration: 'none'}}>  
                <img src={rainierLogo} alt="rainierlogo" className="rainierlogo" /> 
            </NavLink>
        </div>
        <SearchBar />
        {links}
    </div>
    <div id="navMainDivLower">   
        <NavLink exact to="/categories/toysgames" style={{textDecoration: 'none'}}>  
            <div id="toysCategory">
                Toys & Games
            </div>
        </NavLink>   
        <NavLink exact to="/categories/fashion" style={{textDecoration: 'none'}}>  
            <div id="fashionCategory">
                Fashion
            </div>
        </NavLink>   
        <NavLink exact to="/categories/books" style={{textDecoration: 'none'}}>  
            <div id="booksCategory">
                Books
            </div>
        </NavLink>  
        <NavLink exact to="/categories/electronics" style={{textDecoration: 'none'}}>  
            <div id="electronicsCategory">
                Electronics
            </div>
        </NavLink>  
        <NavLink exact to="/categories/homegoods" style={{textDecoration: 'none'}}>  
            <div id="homegoodsCategory">
                Home Goods
            </div>
        </NavLink>  
    </div>
    </>
  );
}

export default Navigation;