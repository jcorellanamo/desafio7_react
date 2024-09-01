import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container text-center" style={{ padding: '50px' }}>
      <img 
        src="../src/assets/404.jpeg" 
        alt="404 Not Found" 
        style={{ 
          width: '20%', 
          marginBottom: '20px', 
          borderRadius: '15px'
        }} 
      />
      <h1 style={{ fontSize: '4rem', marginBottom: '20px' }}>404!</h1>
      <h2>Página no encontrada</h2>
      <p>Lo sentimos, la página que buscas no existe o ha sido movida.</p>
      <Link to="/" className="btn btn-primary mt-4">
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;
