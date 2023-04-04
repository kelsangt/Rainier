import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import * as sessionActions from "../../store/session";
import logo from '../../images/amazonlogo.png';
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
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <div className= "signupMainDiv"> 
        <div id="signupLogo">
            <NavLink to="/">  
                <img src={logo} alt="amazonlogo" className="amazonlogo" /> 
            </NavLink>
        </div>
        <div id="signupSubDiv">
            <div id="createAccountHeader">
                <h1>Create Account</h1>
            </div>
            <form onSubmit={submitProcessor}>
            <ul>
                {errors.map(error => <li key={error}>{error}</li>)}
            </ul>
            <div className="signupName">
                <label>
                    Your name
                    <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    />
                </label>
            </div>
            <div className="signupEmail">
                <label>
                    Email
                    <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                </label>
            </div>
            <div className="signupPassword">
                <label>
                    Password
                    <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                </label>
            </div>
            <div className="signupConfirm">
                <label>
                    Re-enter password
                    <input
                    type="password"
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
    </div>
  );
}

export default SignupFormPage;