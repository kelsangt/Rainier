import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [displayMenu, setDisplayMenu] = useState(false);
  
  const menuProcessor = () => {
    if (displayMenu) return;
    setDisplayMenu(true);
  };
  
  useEffect(() => {
    if (!displayMenu){
        return;
    }
    
    const hideMenu = () => {
      setDisplayMenu(false);
    };

    document.addEventListener('click', hideMenu);
  
    return () => document.removeEventListener("click", hideMenu);
  }, [displayMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <button onClick={menuProcessor}>
        <i className="fa-solid fa-user" />
      </button>
      {displayMenu && (
        <ul className="profile-dropdown">
          <li>{user.name}</li>
          <li>{user.email}</li>
          <li>
            <button onClick={logout}>Log Out</button>
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;