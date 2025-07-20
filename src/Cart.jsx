import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import './Cart.css';
import './Ecommerce.css';

function Cart() {
  const { cart, setCart } = useContext(CartContext);

  const handleQuantityChange = (index, quantity) => {
    const updated = [...cart];
    updated[index].quantity = quantity;
    setCart(updated);
  };

  const removeItem = (index) => {
    const updated = cart.filter((_, i) => i !== index);
    setCart(updated);
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="cart-container">
      <h2 className="cart-header">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <div className={`item-image ${item.cssClass}`} />

              <div className="cart-details">
                <div className="cart-item-name">{item.name}</div>
                <div>${item.price.toFixed(2)}</div>
                <div className="cart-item-quantity">
                  <input
                    type="number"
                    value={item.quantity || 1}
                    min="1"
                    onChange={(e) =>
                      handleQuantityChange(index, parseInt(e.target.value, 10))
                    }
                  />
                </div>
              </div>

              <button
                className="cart-item-remove-button"
                onClick={() => removeItem(index)}
              >
                Remove
              </button>
            </div>
          ))}
          <div className="cart-total">Total: ${total.toFixed(2)}</div>
          <Link to="/checkout" className="cart-checkout-button">
            Proceed to Checkout
          </Link>
        </>
      )}
    </div>
  );
}

export default Cart;
