import { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { TEST_PIZZAS } from './TEST_PIZZAS';
import HomePage from './components/HomePage';
import FeaturedPizzaPage from './components/FeaturedPizzaPage';
import PizzaPage from './components/PizzaPage';
import './App.css';

function App() {
  const [pizzaItems, setPizzaItems] = useState(TEST_PIZZAS);

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Roman Pizza
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="featured">
              Today's Special
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* <h1>Pizza Menu</h1>
      <Link to="/" className="btn-link me-3">
        Home
      </Link>
      <Link to="featured" className="btn-link">
        Today's Special
      </Link> */}
      <Container className="mt-3">
        <Routes>
          <Route path="/" element={<HomePage pizzaItems={pizzaItems} />} />
          <Route
            path="/featured"
            element={<FeaturedPizzaPage pizzaItems={pizzaItems} />}
          />
          <Route
            path="pizzas/:pizzaId"
            element={<PizzaPage pizzaItems={pizzaItems} />}
          />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
