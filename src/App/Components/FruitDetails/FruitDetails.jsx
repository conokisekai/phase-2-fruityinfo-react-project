import React from 'react';

const FruitDetails = ({ fruit }) => {
  return (
    <div className="fruit-details">
      <h2>{fruit.name}</h2>
      <p>Origin: {fruit.origin}</p>
      <p>Nutritional Values: {fruit.nutritionalValues}</p>
      <p>Interesting Facts: {fruit.interestingFacts}</p>
      <button onClick={() => handleLikeClick(fruit.id)}>Like</button>
    </div>
  );
};

export default FruitDetails;


