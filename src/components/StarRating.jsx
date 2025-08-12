import React from 'react';

const StarRating = ({ rating = 0 }) => {
  return (
    <div className="rating">
      {[5, 4, 3, 2, 1].map((star) => (
        <React.Fragment key={star}>
          <input 
            value={star} 
            name="rating" 
            id={`star${star}`} 
            type="radio" 
            checked={star === Math.round(rating)}
            readOnly
          />
          <label htmlFor={`star${star}`}></label>
        </React.Fragment>
      ))}
    </div>
  );
};

export default StarRating;
