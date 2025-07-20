import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';
import './Checkout.css';

function Checkout() {
  const { cart, setCart } = useContext(CartContext);
  const [form, setForm] = useState({
    name: '',
    address: '',
    email: '',
    phone: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields are filled
    if (!form.name || !form.address || !form.email || !form.phone) {
      alert('Please fill in all required fields.');
      return;
    }

    // Ensure phone number contains digits only
    const phoneIsValid = /^\d+$/.test(form.phone);
    if (!phoneIsValid) {
      alert('Phone number must contain digits only.');
      return;
    }

    // Clear cart after successful submission
    setCart([]);

    // Redirect to confirmation page
    navigate('/confirmation');
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      <form onSubmit={handleSubmit} className="checkout-form">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          inputMode="numeric"
          required
        />
        <button type="submit">Place Order</button>
      </form>

      <div className="checkout-summary">
        <h3>Order Summary</h3>
        {cart.map((item, index) => (
          <div key={index} className="checkout-item">
            <div className={`item-image ${item.cssClass}`} />
            <div>
              <strong>{item.name}</strong> – ${item.price.toFixed(2)} × {item.quantity || 1}
            </div>
          </div>
        ))}
        <h4>Total: ${total.toFixed(2)}</h4>
      </div>
    </div>
  );
}

export default Checkout;
