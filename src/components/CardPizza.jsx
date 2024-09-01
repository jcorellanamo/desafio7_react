import React from 'react';

const CardPizza = ({ name, price, ingredients, img, onClick }) => {
  return (
    <div className="card">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Ingredientes: {ingredients.join(', ')}</p>
        <p className="card-text">Precio: ${price.toLocaleString()}</p>
        <button onClick={onClick} className="btn btn-primary">
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default CardPizza;
