import React, {useState} from 'react';
import { Modal } from '../../context/Modal';
import './ProfileModal.css';
import { NavLink } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';


function ProfileModal({user}) {
    const [displayModal, setDisplayModal] = useState(false);
    const dispatch = useDispatch();

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
      };

    return (
        <>  
        <div id="profileModalDiv">
            <div id="modalEntryDiv" onMouseOver={()=> {setDisplayModal(true)}}>Hello, {user.name}</div>
            {displayModal && (
                <Modal whenClosing={() => setDisplayModal(false)}>
                    <div id="modalOpenedDiv">
                        <div id="signOutEntryButtonContainer">
                            <NavLink to="/login" style={{textDecoration: 'none'}}>
                                <button id="signOutEntryButton" onClick={logout}>Sign Out</button>
                            </NavLink>
                        </div>   
                    </div>
                </Modal>
            )}
        </div>
        </>
    )
}

export default ProfileModal