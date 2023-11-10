// src/components/NewFruitForm/NewFruitForm.js
import React, { useState } from 'react';
import { addNewFruit } from '../../services/FruitService';

const NewFruitForm = () => {
  const [fruitData, setFruitData] = useState({
    name: '',
    nutritionalValues: '',
    origin: '',
    interestingFacts: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFruitData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data here if needed

    // Submit the new fruit data
    await addNewFruit(fruitData);

    // Clear the form fields after submission
    setFruitData({
      name: '',
      nutritionalValues: '',
      origin: '',
      interestingFacts: '',
    });

    // Provide user feedback if needed
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={fruitData.name}
          onChange={handleInputChange}
        />
      </label>
      {/* Add other form fields for nutritionalValues, origin, interestingFacts */}
      <button type="submit">Add Fruit</button>
    </form>
  );
};

export default NewFruitForm;

