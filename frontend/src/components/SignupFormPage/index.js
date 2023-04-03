import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
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
    <div class= "form1"> 
        <form onSubmit={submitProcessor}>
        <ul>
            {errors.map(error => <li key={error}>{error}</li>)}
        </ul>
        <div class="signupEmail">
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
        <div class="signupName">
            <label>
                Name
                <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                />
            </label>
        </div>
        <div class="signupPassword">
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
        <div class="signupConfirm">
            <label>
                Confirm Password
                <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                />
            </label>
        </div>
        <div class="signupButton">
            <button class="signupButton2" type="submit">Sign Up</button>
        </div>
        </form>
    </div>
  );
}

export default SignupFormPage;