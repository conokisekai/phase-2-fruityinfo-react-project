import React from 'react';

const FruitItem = ({ fruit }) => {
  return (
    <div className="fruit-item">
      <h3>{fruit.name}</h3>
      <p>Origin: {fruit.origin}</p>
      <p>Nutritional Values: {fruit.nutritionalValues}</p>
      <button onClick={() => handleLikeClick(fruit.id)}>Like</button>
    </div>
  );
};

export default FruitItem;

