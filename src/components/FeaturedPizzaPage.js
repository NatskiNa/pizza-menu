import React from 'react';

const FeaturedPizzaPage = ({ pizzaItems }) => {
  const featuredPizza =
    pizzaItems[Math.floor(Math.random() * pizzaItems.length)];
  return (
    <div>
      <h5>Today's special ...</h5>
      <h2>{featuredPizza.name}</h2>
      <img src={featuredPizza.image} alt="pizzas" />
    </div>
  );
};

export default FeaturedPizzaPage;
