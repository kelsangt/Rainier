import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './ProfileButton.css';

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
    <div id="profileButtonMainDiv">
      <button id="profileButton" onClick={menuProcessor}>
        <div>Hello, {user.name}</div>
      </button>
      {displayMenu && (
        <ul className="profile-dropdown">
          <li>
            <p id="usersName">{user.name}</p>
          </li>
          <li>
            <p id="usersEmail">{user.email}</p>
          </li>
          <li>
            <button onClick={logout}>Log Out</button>
          </li>
        </ul>
      )}
    </div>
    </>
  );
}

export default ProfileButton;