import React from 'react';

const FruitItem = ({ fruit }) => {
  return (
    <li>
      <img src={fruit.image} alt={fruit.name} />
      <p>{fruit.name}</p>
    </li>
  );
};

export default FruitItem;
