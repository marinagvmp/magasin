import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home';
import Ecommerce from './Ecommerce';
import Checkout from './Checkout';
import Confirmation from './Confirmation';
import Cart from './Cart';
import Banner from './Banner';
import Footer from './Footer';

import { CartProvider } from './CartContext';

function App() {
  return (
    <CartProvider>
      <Router basename="/magasin">
        <Banner />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
