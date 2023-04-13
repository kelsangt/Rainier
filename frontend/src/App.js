import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupFormPage';
import Navigation from './components/Navigation';
import ProductIndex from './components/ProductIndex';
import ProductShow from './components/ProductShow';
import CartItemIndex from './components/CartItemIndex';
import MainPage from './components/MainPage';
import NotFound from './components/NotFound';
import Search from './components/SearchShowPage/SearchShowPage';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/categories/:categoryName">
          <Navigation />
          <ProductIndex />
        </Route>
        <Route path="/products/:productId">
          <Navigation />
          <ProductShow />
        </Route>
        <Route path="/products">
          <Navigation />
          <ProductIndex />
        </Route>
        <Route path="/cart">
            <Navigation />
            <CartItemIndex />
        </Route>
        <Route path="/login">
          <LoginFormPage />
        </Route>
        <Route path="/signup">
          <SignupFormPage />
        </Route>
        <Route exact path="/">
          <Navigation />
          <MainPage />
        </Route>
        <Route path="/search">
            <Navigation />
            <Search />
        </Route>
        <Route path="/:none">
          <Navigation />
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
