import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);

  let links;
  if (sessionUser) {
    links = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    links = (
      <>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <ul>
      <li>
        <NavLink exact to="/">Rainier</NavLink>
        {links}
      </li>
    </ul>
  );
}

export default Navigation;