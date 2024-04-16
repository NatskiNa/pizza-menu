import { useParams } from 'react-router-dom';

export default function PizzaPage({ pizzaItems }) {
  let { pizzaId } = useParams();
  pizzaId = parseInt(pizzaId);

  const pizza = pizzaItems.find((p) => p.id === pizzaId);

  if (!pizza) {
    return <h2>Pizza not found</h2>;
  }
  return (
    <div>
      <h3>{pizza.name}</h3>
      <p>{pizza.category}</p>
      <p>{pizza.ingredients}</p>
      <p>${pizza.price}</p>
      <img src={pizza.image} alt="pizzas" />
    </div>
  );
}
