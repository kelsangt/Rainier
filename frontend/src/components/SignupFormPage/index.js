import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import * as sessionActions from "../../store/session";
import rainierLogo2 from '../../images/rainierLogo2.png';
import './SignupForm.css';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const submitProcessor = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, name, password }))
        .catch(async (res) => {
        let data;
        try {
          data = await res.clone().json();
        } catch {
          data = await res.text(); 
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
    }
    return setErrors(['Passwords must match']);
  };

  return (
    <div className= "signupMainDiv"> 
        <div id="signupLogo">
            <NavLink to="/">  
                <img src={rainierLogo2} alt="rainierlogo2" className="rainierlogo2" /> 
            </NavLink>
        </div>
        <div id="signupSubDiv">
            <div id="createAccountHeader">
                <h1>Create Account</h1>
            </div>
            <form onSubmit={submitProcessor}>
            <div id="errors">
                <ul id="signupErrors">
                    {errors.map(error => <li id="signupError" key={error}>{error}</li>)}
                </ul>
            </div>
            <div className="signupName">
                <label id="signupNameLabel">
                    Your name
                    <input
                    id="signupNameInput"
                    type="text"
                    placeholder="First and last name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    />
                </label>
            </div>
            <div className="signupEmail">
                <label id="signupCredentialLabel">
                    Email
                    <input
                    id="signupCredentialInput"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                </label>
            </div>
            <div className="signupPassword">
                <label id="signupPasswordLabel">
                    Password
                    <input
                    id="signupPasswordInput"
                    type="password"
                    placeholder="At least 6 characters"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                </label>
            </div>
            <div className="signupConfirm">
                <label id="signupConfirmLabel">
                    Re-enter password
                    <input
                    id="signupConfirmInput"
                    type="password"
                    placeholder="Re-enter password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    />
                </label>
            </div>
            <div className="signupButton">
                <button className="signupButton2" type="submit">Sign Up</button>
            </div>
            </form>
        </div>
        <div id="welcomeDiv">
            <p>Already have a Rainier account?</p>
        </div>
        <div id="creationDiv">
            <NavLink to="/login">
                <button id="accountCreation">Sign in to Rainier</button>
            </NavLink>
        </div>
    </div>
  );
}

export default SignupFormPage;