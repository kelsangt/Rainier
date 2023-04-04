import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import logo from '../../images/amazonlogo.png';
import './LoginForm.css';

function LoginFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
  
    if (sessionUser) return <Redirect to="/" />;

    // const handleContinueEmail = (e) => {
    //     e.preventDefault();
    //     setCredential()
    // }
  
    const submitProcessor = (e) => {
      e.preventDefault();

      setErrors([]);

      return dispatch(sessionActions.login({ credential, password }))
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

    const demoLoginHandler = (e) => {
        e.preventDefault();
        return dispatch(sessionActions.login({credential: "demo@user.io", password: "password"}))
    }

    return (
        
        <div id="loginMainDiv">
            <div id="logo">
                <NavLink to="/">  
                    <img src={logo} alt="amazonlogo" className="amazonlogo" /> 
                </NavLink>
            </div>
            <div id="loginSubDiv">
                <div id="signInHeader">
                    <h3 id="signInH3">Sign In</h3>
                </div>
                <form className="LoginFormPage" onSubmit={submitProcessor}>
                <div id="loginErrorsDiv">
                    <ul id="loginErrors">
                        {errors.map(error => <li id="loginError" key={error}>{error}</li>)}
                    </ul>
                </div>
                <div className= "div1">  
                <label className="credential">
                    Email
                    <input
                    id="credentialInput"
                    type="email"
                    value={credential}
                    onChange={(e) => setCredential(e.target.value)}
                    required
                    />
                </label>
                </div>
                <div className="div2">
                <label className="password">
                    Password
                    <input
                    id="passwordInput"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                </label>
                </div>
                <div className="div3">
                <button id="signInButton" type="submit">Sign In</button>
                <div id="demoDiv">
                    <button id="demoLoginButton" onClick={demoLoginHandler}>Demo Login</button>
                </div>
                
                </div>
                </form>
            </div>

            <div id="welcomeDiv">
                <p>New to Rainier?</p>
            </div>
            <div id="creationDiv">
                <NavLink to="/signup">
                    <button id="accountCreation">Create your Rainier account</button>
                </NavLink>
            </div>
        </div>
    );
}

export default LoginFormPage;