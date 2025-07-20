import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';
import './Banner.css';
import logo from './assets/logo.png';

function Banner() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleCartClick = () => {
    navigate('/cart');
  };

  // Count total number of items in cart
  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  return (
    <div className="banner">
      <img
        src={logo}
        alt="Logo"
        className="banner-logo"
        onClick={handleLogoClick}
      />

      <div className="cart-icon-container" onClick={handleCartClick}>
        <div className="cart-icon" />
        {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
      </div>
    </div>
  );
}

export default Banner;
