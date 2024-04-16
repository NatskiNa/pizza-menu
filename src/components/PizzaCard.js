import React from 'react';
import { Link } from 'react-router-dom';

const PizzaCard = ({ pizza }) => {
  return (
    <div className="pizzaCard">
      <p>{pizza.name}</p>
      <p>${pizza.price}</p>
      <img className="pizzaImg" src={pizza.image} alt="pizzas" />
      <Link to={'/pizzas/' + pizza.id}>Details</Link>
    </div>
  );
};

export default PizzaCard;
