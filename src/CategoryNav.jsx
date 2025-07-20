import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CategoryNav.css';

function CategoryNav() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const categories = [
    'All Products',
    'Tops',
    'Bottoms',
    'Shoes',
    'Outerwear',
    'Accessories',
    'Dresses'
  ];

  const handleSelect = (category) => {
    setOpen(false);
    const path = category === 'All Products' ? '/ecommerce' : `/ecommerce?category=${category}`;
    navigate(path);
  };

  return (
    <div className="category-nav">
      <button onClick={() => setOpen(!open)} className="dropdown-toggle">
        Categories ▾
      </button>
      <ul className={`dropdown-menu ${open ? 'open' : ''}`}>
        {categories.map((cat) => (
          <li key={cat} onClick={() => handleSelect(cat)}>{cat}</li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryNav;
