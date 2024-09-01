import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Pizza = () => {
  const { id } = useParams(); // Obtener el ID de la pizza desde la URL
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        if (!response.ok) {
          throw new Error('Error al obtener la pizza');
        }
        const data = await response.json();
        setPizza(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPizza();
  }, [id]);

  if (loading) {
    return <p>Cargando pizza...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={pizza.img} alt={pizza.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>{pizza.name}</h2>
          <p>{pizza.description}</p>
          <h5>Ingredientes:</h5>
          <ul>
            {pizza.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <p className="text-muted">${pizza.price.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
