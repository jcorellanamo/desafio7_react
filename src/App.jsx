import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Pizza from './pages/Pizza';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import { CartProvider } from './context/CartContext';
import { UserProvider, UserContext } from './context/UserContext';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <UserProvider>
      <CartProvider>
        <Router>
          <div className="app">
            <Navbar />
            <div className="container-fluid">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<UserContext.Consumer>{({ token }) => (token ? <Navigate to="/" /> : <Register />)}</UserContext.Consumer>} />
                <Route path="/login" element={<UserContext.Consumer>{({ token }) => (token ? <Navigate to="/" /> : <Login />)}</UserContext.Consumer>} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/pizza/:id" element={<Pizza />} /> {/* Utiliza el ID de la pizza */}
                <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
                <Route path="/404" element={<NotFound />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </UserProvider>
  );
};

export default App;
