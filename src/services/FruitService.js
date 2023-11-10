const API_BASE_URL =
  'https://cors-anywhere.herokuapp.com/https://fruityvice.com/api/fruit/all'; 

export const getAllFruits = async () => {
  const response = await fetch(`${API_BASE_URL}/api/fruit/all`);
  const fruits = await response.json();
  return fruits;
};

export const getFruitById = async (id) => {
  const response = await fetch(`${API_BASE_URL}/api/fruit/${id}`);
  const fruit = await response.json();
  return fruit;
};

export const addNewFruit = async (fruitData) => {
  await fetch(`${API_BASE_URL}/api/fruit`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(fruitData),
  });
};
