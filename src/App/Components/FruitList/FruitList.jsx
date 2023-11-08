import React, { useState, useEffect } from 'react';

const FruitList = () => {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fruityvice.com/api/fruit/all');
        const data = await response.json();
        setFruits(data); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); 
  }, []); 

  return (
    <div>
      <h2>Fruit List</h2>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>{fruit.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FruitList;


