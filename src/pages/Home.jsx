import React, { useEffect, useState, useContext } from 'react';
import CardPizza from '../components/CardPizza';
import { CartContext } from '../context/CartContext'; // Importar CartContext

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useContext(CartContext); // Usar el contexto

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/pizzas');
        if (!response.ok) {
          throw new Error('Error al obtener las pizzas');
        }
        const data = await response.json();
        setPizzas(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPizzas();
  }, []);

  if (loading) {
    return <p>Cargando pizzas...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="col-md-4 mb-4">
            <CardPizza
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
              onClick={() => addToCart(pizza)} // Añadir al carrito cuando se haga clic
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
