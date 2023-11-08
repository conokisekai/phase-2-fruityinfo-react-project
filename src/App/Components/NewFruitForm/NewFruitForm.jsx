import React, { useState } from 'react';

const NewFruitForm = ({ onAddFruit }) => {
  const [fruitName, setFruitName] = useState('');
  const [origin, setOrigin] = useState('');
  const [nutritionalValues, setNutritionalValues] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFruit = {
      name: fruitName,
      origin,
      nutritionalValues,
    };
    // Call an API function to submit the new fruit data
    // Example: addFruitToAPI(newFruit);
    onAddFruit(newFruit); // Pass the new fruit data to the parent component
    setFruitName('');
    setOrigin('');
    setNutritionalValues('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Fruit Name:
        <input type="text" value={fruitName} onChange={(e) => setFruitName(e.target.value)} />
      </label>
      <label>
        Origin:
        <input type="text" value={origin} onChange={(e) => setOrigin(e.target.value)} />
      </label>
      <label>
        Nutritional Values:
        <input type="text" value={nutritionalValues} onChange={(e) => setNutritionalValues(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewFruitForm;
