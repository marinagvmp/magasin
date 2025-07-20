import React from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryNav from './CategoryNav';
import './Home.css';
import logo from './assets/logo.png';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="category-wrapper">
        <CategoryNav />
      </div>

      <h1 className="welcome">Welcome to Magasin</h1>

      <div className="feature-grid">
        <div
          className="feature-item redtshirt"
          onClick={() => navigate('/ecommerce?category=Tops')}
        >
          <span>Shop Tops</span>
        </div>

        <div
          className="feature-item pinkdress"
          onClick={() => navigate('/ecommerce?category=Dresses')}
        >
          <span>Shop Dresses</span>
        </div>

        <div
          className="feature-item orangesneakers"
          onClick={() => navigate('/ecommerce?category=Shoes')}
        >
          <span>Shop Shoes</span>
        </div>

        <div
          className="feature-item shopall"
          onClick={() => navigate('/ecommerce')}
        >
          <img src={logo} alt="Shop All" className="shopall-logo" />
          <span>Shop All</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
