import React, { useState, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CartContext } from './CartContext';
import './Ecommerce.css';

// Static product data
const items = [
  { name: 'Red T-Shirt', category: 'Tops', color: 'Red', price: 19.99, cssClass: 'redtshirt' },
  { name: 'Pink T-Shirt', category: 'Tops', color: 'Pink', price: 18.99, cssClass: 'pinktshirt' },
  { name: 'Blue T-Shirt', category: 'Tops', color: 'Blue', price: 19.49, cssClass: 'bluetshirt' },
  { name: 'Blue Jeans', category: 'Bottoms', color: 'Blue', price: 39.99, cssClass: 'bluejeans' },
  { name: 'Pink Skirt', category: 'Bottoms', color: 'Pink', price: 29.99, cssClass: 'pinkskirt' },
  { name: 'White Skirt', category: 'Bottoms', color: 'White', price: 27.99, cssClass: 'whiteskirt' },
  { name: 'Orange Sneakers', category: 'Shoes', color: 'Orange', price: 49.99, cssClass: 'orangesneakers' },
  { name: 'Red Sandals', category: 'Shoes', color: 'Red', price: 42.50, cssClass: 'redsandals' },
  { name: 'Blue Jacket', category: 'Outerwear', color: 'Blue', price: 59.99, cssClass: 'bluejacket' },
  { name: 'Orange Scarf', category: 'Accessories', color: 'Orange', price: 15.00, cssClass: 'orangescarf' },
  { name: 'White Scarf', category: 'Accessories', color: 'White', price: 15.00, cssClass: 'whitescarf' },
  { name: 'Red Dress', category: 'Dresses', color: 'Red', price: 44.99, cssClass: 'reddress' },
  { name: 'Blue Dress', category: 'Dresses', color: 'Blue', price: 44.99, cssClass: 'bluedress' }
];

function Ecommerce() {
  const { cart, setCart } = useContext(CartContext);
  const [searchParams, setSearchParams] = useSearchParams();

  // Get URL filters
  const initialCategory = searchParams.get('category') || '';
  const initialColor = searchParams.get('color') || '';

  const [categoryFilter, setCategoryFilter] = useState(initialCategory);
  const [colorFilter, setColorFilter] = useState(initialColor);

  // Apply filters to item list
  const filteredItems = items.filter(item => {
    const matchesCategory = !categoryFilter || item.category === categoryFilter;
    const matchesColor = !colorFilter || item.color === colorFilter;
    return matchesCategory && matchesColor;
  });

  // Add item to cart with quantity management
  const addToCart = (item) => {
    const existingIndex = cart.findIndex(cartItem => cartItem.name === item.name);
    if (existingIndex !== -1) {
      const updatedCart = [...cart];
      const currentQuantity = updatedCart[existingIndex].quantity || 1;
      updatedCart[existingIndex].quantity = currentQuantity + 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  // Reset all filters
  const clearFilters = () => {
    setCategoryFilter('');
    setColorFilter('');
    setSearchParams({});
  };

  return (
    <div className="ecommerce-container">
      <h2>Shop Our Collection</h2>

      <div className="filters">
        <select value={categoryFilter} onChange={e => setCategoryFilter(e.target.value)}>
          <option value="">All Categories</option>
          <option value="Tops">Tops</option>
          <option value="Bottoms">Bottoms</option>
          <option value="Shoes">Shoes</option>
          <option value="Outerwear">Outerwear</option>
          <option value="Accessories">Accessories</option>
          <option value="Dresses">Dresses</option>
        </select>

        <select value={colorFilter} onChange={e => setColorFilter(e.target.value)}>
          <option value="">All Colors</option>
          <option value="Red">Red</option>
          <option value="Pink">Pink</option>
          <option value="Blue">Blue</option>
          <option value="White">White</option>
          <option value="Orange">Orange</option>
        </select>

        <button className="clear-filters-button" onClick={clearFilters}>
          Clear All Filters
        </button>
      </div>

      <div className="item-grid">
        {filteredItems.length === 0 ? (
          <p>No items match your filters.</p>
        ) : (
          filteredItems.map(item => (
            <div key={item.name} className="item-card">
              <div className={`item-image ${item.cssClass}`} />
              <h4>{item.name}</h4>
              <p>${item.price.toFixed(2)}</p>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Ecommerce;
