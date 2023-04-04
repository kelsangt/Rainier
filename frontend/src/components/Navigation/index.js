import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import logo from '../../images/amazonlogo.png';
import logo2 from '../../images/amazonlogo2.png';
import magnifyingGlass from '../../images/magnifying_glass.png';
import './Navigation.css';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);

  let links;
  if (sessionUser) {
    links = (
        <div id="profileDiv">
            <ProfileButton user={sessionUser} />
        </div>
    );
  } else {
    links = (
        <>
        <div id="signInDiv">
            <NavLink to="/login">
               <p id="signInDivText">Hello, sign in <br></br>Account & Lists</p>
            </NavLink>
        </div>
        </>
    );
  }

  return (
    <div id="navMainDiv">
        <div id="navLogo">
            <NavLink exact to="/">  
                <img src={logo2} alt="navAmazonlogo" className="navAmazonlogo" /> 
            </NavLink>
        </div>
        <div id="searchBarDiv">
            <select name="categoriesSelector" id="categoriesSelector">
                <option value="toysGames">Toys & Games</option> 
                <option value="clothing">Clothing</option> 
            </select>
            <input id="searchBar" type="text" placeholder="Search Rainier"></input>
        </div>
        <div id="magnifyingGlassDiv">
            <NavLink exact to="/">
                <img src={magnifyingGlass} alt="magnifyingGlassIcon" className="magnifyingGlassIcon" /> 
            </NavLink>
        </div>
        {links}
        
    </div>
  );
}

export default Navigation;