import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Modal, Button, Form } from 'react-bootstrap';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import "./Header.css";

const Header = ({ username }) => {
  // State for controlling the visibility of modals
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showOrderModal, setShowOrderModal] = useState(false);

  // State for order information and validation errors
  const [orderInfo, setOrderInfo] = useState({ orderNumber: '', name: '', email: '' });
  const [errors, setErrors] = useState({ orderNumber: '', name: '', email: '' });

  // State for managing hamburger menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Functions to show/hide the login modal
  const handleShowLogin = () => setShowLoginModal(true);
  const handleCloseLogin = () => setShowLoginModal(false);

  // Functions to show/hide the register modal
  const handleShowRegister = () => {
    setShowRegisterModal(true);
    setShowLoginModal(false);
  };
  const handleCloseRegister = () => setShowRegisterModal(false);

  // Functions to show/hide the order tracking modal
  const handleShowOrder = () => setShowOrderModal(true);
  const handleCloseOrder = () => setShowOrderModal(false);

  // Function to handle changes in order information form
  const handleOrderChange = (e) => {
    const { name, value } = e.target;
    setOrderInfo(prevState => ({ ...prevState, [name]: value }));
  };

  // Function to validate order information
  const validateOrderInfo = () => {
    let isValid = true;
    const newErrors = { orderNumber: '', name: '', email: '' };

    if (!orderInfo.orderNumber) {
      newErrors.orderNumber = 'Order number is required';
      isValid = false;
    }
    if (!orderInfo.name) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    if (!orderInfo.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Function to handle the submission of the order tracking form
  const handleOrderSubmit = (e) => {
    e.preventDefault();
    if (validateOrderInfo()) {
      // Handle order tracking logic here
      handleCloseOrder();
    }
  };

  // Function to toggle the hamburger menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Function to close the hamburger menu
  const closeMenu = () => setIsMenuOpen(false);

  // Effect to close the hamburger menu if clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.header') && isMenuOpen) {
        closeMenu();
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="header">
      <div className="left">
        <Link to="/">
          <h1>De Jong</h1>
        </Link>
      </div>
      <nav className={`middle ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/store" onClick={closeMenu}>Store</Link>
        <Link to="/help" onClick={closeMenu}>Help</Link>
        <Link to="#" className="orders-link" onClick={() => { handleShowOrder(); closeMenu(); }}>Orders</Link>
        <button className="close-hamburger" onClick={toggleMenu}>×</button>
      </nav>
      <div className="right">
        <Button variant="primary" className="login-button" onClick={handleShowLogin}>
          {username ? username : "Sign In"}
        </Button>
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      {/* Login modal */}
      <Modal show={showLoginModal} onHide={handleCloseLogin} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Login onClose={handleCloseLogin} onRegister={handleShowRegister} />
        </Modal.Body>
      </Modal>
      {/* Register modal */}
      <Modal show={showRegisterModal} onHide={handleCloseRegister} centered>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Register onClose={handleCloseRegister} />
        </Modal.Body>
      </Modal>
      {/* Order tracking modal */}
      <Modal show={showOrderModal} onHide={handleCloseOrder} centered>
        <Modal.Header closeButton>
          <Modal.Title>Track Your Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleOrderSubmit}>
            <Form.Group controlId="orderNumber">
              <Form.Label>Order Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter order number"
                name="orderNumber"
                value={orderInfo.orderNumber}
                onChange={handleOrderChange}
                isInvalid={!!errors.orderNumber}
              />
              <Form.Control.Feedback type="invalid">
                {errors.orderNumber}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={orderInfo.name}
                onChange={handleOrderChange}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={orderInfo.email}
                onChange={handleOrderChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit">
              Track Order
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </header>
  );
};

export default Header;
