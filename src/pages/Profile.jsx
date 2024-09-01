import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { logout } = useContext(UserContext); // Usar el UserContext
  const navigate = useNavigate(); // Para redirigir después de cerrar sesión

  const handleLogout = () => {
    logout(); // Llamar a la función de logout del contexto
    navigate('/login'); // Redirigir a la página de login
  };

  return (
    <div className="container mt-5">
      <h2>Perfil de Usuario</h2>
      <p>Correo electrónico: usuario@ejemplo.com</p> {/* Simulado */}
      <button className="btn btn-danger" onClick={handleLogout}>
        Cerrar sesión
      </button>
    </div>
  );
};

export default Profile;
