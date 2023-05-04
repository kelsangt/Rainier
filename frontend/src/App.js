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
import Footer from './components/Footer';
import ReviewCreationForm from './components/ReviewCreationForm';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/categories/:categoryName">
          <Navigation />
          <ProductIndex />
          <Footer />
        </Route>
        <Route exact path="/products/:productId">
          <Navigation />
          <ProductShow />
          <Footer />
        </Route>
        <Route exact path="/products">
          <Navigation />
          <ProductIndex />
          <Footer />
        </Route>
        <Route exact path="/createReview/:productId">
          <Navigation />
          <ReviewCreationForm />
          <Footer />
        </Route>
        <Route path="/cart">
          <Navigation />
          <CartItemIndex />
          <Footer />
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
          <Footer />
        </Route>
        <Route exact path="/search">
          <Navigation />
          <Search />
          <Footer />
        </Route>
        <Route path="*">
          <Navigation />
          <NotFound />
          <Footer />
        </Route>
      </Switch>
    </>
  );
}

export default App;
