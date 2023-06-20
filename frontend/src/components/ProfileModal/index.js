import React, {useState} from 'react';
import { Modal } from '../../context/Modal';
import './ProfileModal.css';
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
            <div id="modalEntryDiv" onMouseOver={()=> {setDisplayModal(true)}}>Hello, {user.name} <br></br> Account & Lists
                {displayModal && (
                    <Modal whenClosing={() => setDisplayModal(false)}>
                            <div id="signOutEntryButtonContainer">
                                    <div id="signOutEntryButton" onClick={logout}>Sign Out</div>
                            </div>      
                    </Modal>
                )}
            </div>
        </div>
        </>
    )
}

export default ProfileModal