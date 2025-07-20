import React from 'react';
import { Link } from 'react-router-dom';
import StarRating from './StarRating';
import './Confirmation.css';

function Confirmation() {
  const handleSubmit = () => {
    alert('Thanks for your feedback!');
  };

  return (
    <div className="confirmation-container">
      <h2>Thank you for your purchase!</h2>
      <p>We’ll send a confirmation email shortly.</p>

      <h3>Rate your experience:</h3>
      <form onSubmit={handleSubmit}>
        <label>Shopping experience</label>
        <StarRating />
        <label>Ease of checkout</label>
        <StarRating />
        <label>Product satisfaction</label>
        <StarRating />
        <textarea placeholder="Any other comments?" rows="4" />

        <Link to="/">
          <button type="submit">Submit Feedback</button>
        </Link>
      </form>
    </div>
  );
}

export default Confirmation;
