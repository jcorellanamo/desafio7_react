import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, calculateTotal } = useContext(CartContext);
  const { token } = useContext(UserContext);

  return (
    <div className="container mt-5">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div>
          <ul className="list-group mb-3">
            {cart.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img src={item.img} alt={item.name} style={{ width: '50px', marginRight: '10px' }} />
                  <span>{item.name}</span>
                </div>
                <div>
                  <button className="btn btn-secondary btn-sm" onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span className="mx-2">{item.quantity}</span>
                  <button className="btn btn-secondary btn-sm" onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
                <span>${(item.price * item.quantity).toLocaleString()}</span>
              </li>
            ))}
          </ul>
          <h4>Total: ${calculateTotal().toLocaleString()}</h4>
          <button className="btn btn-primary" disabled={!token}>Proceder al Pago</button> {/* Deshabilitar si token es false */}
        </div>
      )}
    </div>
  );
};

export default Cart;
