import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupFormPage';
import Navigation from './components/Navigation';
import ProductIndex from './components/ProductIndex';
import ProductShow from './components/ProductShow';


function App() {
  return (
    <>
      <Switch>
        <Route path="/products/:productId">
          <Navigation />
          <ProductShow />
        </Route>
        <Route path="/login">
          <LoginFormPage />
        </Route>
        <Route path="/signup">
          <SignupFormPage />
        </Route>
        <Route path="/">
          <Navigation />
          <ProductIndex />
        </Route>
      </Switch>
    </>
  );
}

export default App;
