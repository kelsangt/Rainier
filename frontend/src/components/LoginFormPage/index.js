import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';

function LoginFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
  
    if (sessionUser) return <Redirect to="/" />;
  
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

    return (
        <form class="LoginFormPage" onSubmit={submitProcessor}>
        <ul>
            {errors.map(error => <li key={error}>{error}</li>)}
        </ul>
        <div class= "div1">  
          <label class="credential">
              Email
              <input
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
              />
          </label>
        </div>
        <div class="div2">
          <label class="password">
              Password
              <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              />
          </label>
        </div>
        <div class="div3">
          <button class="button" type="submit">Log In</button>
        </div>

        </form>
    );
}

export default LoginFormPage;