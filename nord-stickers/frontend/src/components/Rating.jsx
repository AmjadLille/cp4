import React from 'react';

const Rating = ({ valeu, text, color }) => {
  return (
    <div className="rating">
      <span>
        <i style={{ color: color }} className={valeu >= 1 ? 'fas fa-star' : valeu >= 0.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
      </span>
      <span>
        <i style={{ color: color }} className={valeu >= 2 ? 'fas fa-star' : valeu >= 1.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
      </span>
      <span>
        <i style={{ color: color }} className={valeu >= 3 ? 'fas fa-star' : valeu >= 2.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
      </span>
      <span>
        <i style={{ color: color }} className={valeu >= 4 ? 'fas fa-star' : valeu >= 3.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
      </span>
      <span>
        <i style={{ color: color }} className={valeu >= 5 ? 'fas fa-star' : valeu >= 4.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
      </span>
      <span> {text && text} </span>
    </div>
  );
};

Rating.defaultProps = {
  color: '#f8e825',
};

export default Rating;
