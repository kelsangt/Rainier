import React, {useState} from 'react';
import { Modal } from '../../context/Modal';
import './LoginModal.css';
import { NavLink } from 'react-router-dom';


function LoginModal() {
    const [displayModal, setDisplayModal] = useState(false);

    return (
         
        <div id="loginModalDiv">
            <div id="modalEntryDiv" onMouseOver={()=> {setDisplayModal(true)}}>Hello, sign in <br></br> Account & Lists 
                {displayModal && (
                    <Modal whenClosing={() => setDisplayModal(false)}>
                        <div id="signInEntryButtonContainer">
                            <NavLink to="/login" style={{textDecoration: 'none'}}>
                                <div id="signInEntryButton">
                                    Sign In
                                </div>
                            </NavLink>
                            <NavLink to="/signup" style={{textDecoration: 'none'}}>
                                <p id="newCustomer">New customer? Start here.</p>
                            </NavLink>
                        </div>        
                    </Modal>
                )}
            </div>
        </div>
        
    )
}

export default LoginModal

