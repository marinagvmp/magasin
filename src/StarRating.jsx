import React, { useState } from 'react';
import './StarRating.css';

function StarRating() {
  const [selectedRating, setSelectedRating] = useState(0);
  const [hoverValue, setHoverValue] = useState(0);

  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className={`star ${
            index < hoverValue ? 'hovered' : ''
          } ${index < selectedRating ? 'selected' : ''}`}
          onMouseEnter={() => setHoverValue(index + 1)}
          onMouseLeave={() => setHoverValue(0)}
          onClick={() => setSelectedRating(index + 1)}
        />
      ))}
    </div>
  );
}

export default StarRating;
