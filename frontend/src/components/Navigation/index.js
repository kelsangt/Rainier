import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import ProfileButton from './ProfileButton';
import logo2 from '../../images/amazonlogo2.png';
import cart from '../../images/cart.png'
import magnifyingGlass from '../../images/magnifying_glass.png';
import LoginModal from '../LoginModal/index'
import ProfileModal from '../ProfileModal/index'
import SearchBar from './SearchBar';
import './Navigation.css';


function Navigation() {
  const sessionUser = useSelector(state => state.session.user);

  let links;
  if (sessionUser) {
    links = (
        <>
        {/* <div id="profileDiv">
            <ProfileButton user={sessionUser} />
        </div> */}
        <ProfileModal user={sessionUser}/>
        <NavLink to="/" style={{textDecoration: 'none'}}>
            <div id="returnsOrders">
                <p>Returns <br></br> & Orders</p>
            </div>
        </NavLink>
        <NavLink to="/cart" style={{textDecoration: 'none'}}>
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
        <LoginModal />
        {/* <div id="signInDiv">
            <NavLink to="/login" style={{textDecoration: 'none'}}>
               <p id="signInDivText">Hello, sign in <br></br>Account & Lists</p>
            </NavLink>
        </div> */}
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
                <option value="homegoods">Home Goods</option> 
            </select>
        </div>
        <SearchBar />
        {/* <div id="searchBarDiv">
            <div id="innerSearchBarDiv">
                <input id="searchBar" type="text" placeholder="Search Rainier"></input>
            </div>
        </div> */}
        {/* <div id="magnifyingGlassDiv">
            <NavLink exact to="/" style={{textDecoration: 'none'}}>
                <img src={magnifyingGlass} alt="magnifyingGlassIcon" className="magnifyingGlassIcon" /> 
            </NavLink>
        </div> */}
        {links}
    </div>
    <div id="navMainDivLower">   
        <NavLink exact to="/categories/toysgames" style={{textDecoration: 'none'}}>  
            <div id="toysCategory">
                Toys & Games
            </div>
        </NavLink>   
        <NavLink exact to="/fashion" style={{textDecoration: 'none'}}>  
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