import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import logo2 from '../../images/amazonlogo2.png';
import cart from '../../images/cart.png'
import magnifyingGlass from '../../images/magnifying_glass.png';
import './Navigation.css';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);

  let links;
  if (sessionUser) {
    links = (
        <>
        <div id="profileDiv">
            <ProfileButton user={sessionUser} />
        </div>
        <NavLink to="/" style={{textDecoration: 'none'}}>
            <div id="returnsOrders">
                <p>Returns <br></br> & Orders</p>
            </div>
        </NavLink>
        <NavLink to="/" style={{textDecoration: 'none'}}>
            <div id="shoppingCart">
                <img src={cart} alt="cartImage" className="cartImage" /> 
                <p id="cartText">Cart</p>
            </div>
        </NavLink>
        </>
    );
  } else {
    links = (
        <>
        <div id="signInDiv">
            <NavLink to="/login" style={{textDecoration: 'none'}}>
               <p id="signInDivText">Hello, sign in <br></br>Account & Lists</p>
            </NavLink>
        </div>
        <NavLink to="/login" style={{textDecoration: 'none'}}>
            <div id="returnsOrders">
                <p>Returns <br></br> & Orders</p>
            </div>
        </NavLink>
        <NavLink to="/login" style={{textDecoration: 'none'}}>
            <div id="shoppingCart">
                <img src={cart} alt="cartImage" className="cartImage" /> 
                <p id="cartText">Cart</p>
            </div>
        </NavLink>
        </>
    );
  }

  return (
    <>
    
    <div id="navMainDiv">
        <div id="navLogo">
            <NavLink exact to="/" style={{textDecoration: 'none'}}>  
                <img src={logo2} alt="navAmazonlogo" className="navAmazonlogo" /> 
            </NavLink>
        </div>
        <div id="categoryDiv">
            <select name="categoriesSelector" id="categoriesSelector">
                <option value="all">All</option> 
                <option value="toysGames">Toys & Games</option> 
                <option value="clothing">Clothing</option> 
                <option value="books">Books</option> 
                <option value="electronics">Electronics</option> 
                <option value="homeGoods">Home Goods</option> 
            </select>
        </div>
        <div id="searchBarDiv">
            <div id="innerSearchBarDiv">
                <input id="searchBar" type="text" placeholder="Search Rainier"></input>
            </div>
        </div>
        <div id="magnifyingGlassDiv">
            <NavLink exact to="/" style={{textDecoration: 'none'}}>
                <img src={magnifyingGlass} alt="magnifyingGlassIcon" className="magnifyingGlassIcon" /> 
            </NavLink>
        </div>
        {links}
    </div>
    <div id="navMainDivLower">   
        <NavLink exact to="/" style={{textDecoration: 'none'}}>  
            <div id="toysCategory">
                Toys & Games
            </div>
        </NavLink>   
        <NavLink exact to="/" style={{textDecoration: 'none'}}>  
            <div id="clothingCategory">
                Clothing
            </div>
        </NavLink>   
        <NavLink exact to="/" style={{textDecoration: 'none'}}>  
            <div id="booksCategory">
                Books
            </div>
        </NavLink>  
        <NavLink exact to="/" style={{textDecoration: 'none'}}>  
            <div id="electronicsCategory">
                Electronics
            </div>
        </NavLink>  
        <NavLink exact to="/" style={{textDecoration: 'none'}}>  
            <div id="homeGoodsCategory">
                Home Goods
            </div>
        </NavLink>  
    </div>
    </>
  );
}

export default Navigation;