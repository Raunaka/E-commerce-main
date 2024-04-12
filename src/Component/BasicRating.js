import React from 'react';

export default function BasicRating({ value }) {
  const stars = [];

  // Create an array of stars based on the value
  for (let i = 0; i < 5; i++) {
    if (i < value) {
      stars.push(<span key={i} className="star filled">&#9733;</span>);
    } else {
      stars.push(<span key={i} className="star">&#9733;</span>);
    }
  }

  return (
    <div className="rating">
      {stars}
      <style>
        {`
          /* Styles for the rating container */
          .rating {
            display: inline-block; /* Ensures stars are displayed in a row */
          }
          
          /* Styles for individual stars */
          .star {
            font-size: 24px; /* Adjust the size of the stars */
            color: #ccc; /* Default color for empty stars */
            cursor: pointer; /* Change cursor to pointer on hover */
          }
          
          /* Styles for filled stars */
          .filled {
            color: gold; /* Color for filled stars */
          }
          
          
        `}
      </style>
    </div>
  );
}
