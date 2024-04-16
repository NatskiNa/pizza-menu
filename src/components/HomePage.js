import React from 'react';
import { useState } from 'react';
import PizzaCard from './PizzaCard';

const HomePage = ({ pizzaItems }) => {
  const [category, setCategory] = useState('All');
  let pizzaCategory;
  if (category === 'All') {
    pizzaCategory = pizzaItems;
  } else {
    pizzaCategory = pizzaItems.filter((pizza) => pizza.category === category);
  }

  return (
    <div>
      <div>
        <button
          className="btn btn-primary me-2"
          onClick={() => setCategory('All')}
        >
          All
        </button>
        <button
          className="btn btn-primary me-2"
          onClick={() => setCategory('veggie')}
        >
          Veggie
        </button>
        <button
          className="btn btn-primary me-2"
          onClick={() => setCategory('meat')}
        >
          Meat
        </button>
      </div>
      {pizzaCategory.map((pizza) => (
        <PizzaCard pizza={pizza} />
      ))}
    </div>
  );
};

export default HomePage;
