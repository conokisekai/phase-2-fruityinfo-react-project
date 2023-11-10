import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FruitItem from './FruitItem';
import { getAllFruits } from '../../services/FruitService';

const FruitList = () => {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    const fetchFruits = async () => {
      const allFruits = await getAllFruits();
      setFruits(allFruits);
    };

    fetchFruits();
  }, []);

  return (
    <div>
      <h2>All Fruits</h2>
      <ul>
        {fruits.map((fruit) => (
          <Link key={fruit.id} to={`/fruit/${fruit.id}`}>
            <FruitItem fruit={fruit} />
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default FruitList;
