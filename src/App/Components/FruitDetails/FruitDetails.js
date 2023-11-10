import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFruitById } from '../../services/FruitService';

const FruitDetails = () => {
  const { id } = useParams();
  const [fruit, setFruit] = useState(null);

  useEffect(() => {
    const fetchFruit = async () => {
      const selectedFruit = await getFruitById(id);
      setFruit(selectedFruit);
    };

    fetchFruit();
  }, [id]);

  if (!fruit) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{fruit.name}</h2>
      <p>Nutritional Values: {fruit.nutritionalValues}</p>
      <p>Origin: {fruit.origin}</p>
      <p>Interesting Facts: {fruit.interestingFacts}</p>
      {/* Add other details as needed */}
    </div>
  );
};

export default FruitDetails;
