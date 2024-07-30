// src/App.js

import React from 'react';
// Import necessary components and hooks from React Router and Redux
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import Home from './pages/Home/Home';
import Store from './pages/store/Store';
import Cart from './pages/Cart';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Checkout from './pages/store/Checkout';
import PaymentPage from './pages/PaymentPage';
import Help from './pages/Help/Help'; // Import the Help page component

const App = () => {
  // Use useSelector to get the current username from the Redux store
  const username = useSelector((state) => state.user.username);

  return (
    <Router>
      {/* Render the Header component with the current username as a prop */}
      <Header username={username} />
      <Routes>
        {/* Define the routes and their corresponding components */}
        <Route path="/" element={<Home />} /> {/* Home page */}
        <Route path="/store" element={<Store />} /> {/* Store page */}
        <Route path="/cart" element={<Cart />} /> {/* Cart page */}
        <Route path="/login" element={<Login />} /> {/* Login page */}
        <Route path="/register" element={<Register />} /> {/* Register page */}
        <Route path="/checkout" element={<Checkout />} /> {/* Checkout page */}
        <Route path="/payment" element={<PaymentPage />} /> {/* Payment page */}
        <Route path="/help" element={<Help />} /> {/* Help page */}
      </Routes>
    </Router>
  );
};

export default App;

