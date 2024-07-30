import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Checkout.css'; // Ensure this file contains necessary Bootstrap and custom styles

const Checkout = () => {
  // Access location state to get subtotal from previous page
  const location = useLocation();
  const { subtotal } = location.state || {}; // Destructure subtotal from location.state

  // State for managing form input data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    country: '',
    phoneNumber: ''
  });

  // State for managing validation errors
  const [errors, setErrors] = useState({});

  // State for managing selected shipment option
  const [shipmentOption, setShipmentOption] = useState('dhl'); // Default shipment option

  // Handle changes in form input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle changes in shipment option selection
  const handleShipmentChange = (e) => {
    setShipmentOption(e.target.value);
  };

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      if (!formData[key]) {
        newErrors[key] = 'This field is required';
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (validateForm()) {
      // Handle payment processing here
      console.log('Form data:', formData);
      console.log('Shipment option:', shipmentOption);
      // Example: navigate to payment page or API call
    }
  };

  // Determine shipment fee based on selected shipment option
  const shipmentFee = shipmentOption === 'dhl' ? 0 : (shipmentOption === 'air' ? 500 : 300);

  // Calculate total amount
  const total = subtotal + shipmentFee;

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Delivery Information Column */}
        <div className="col-md-8">
          <h2>Delivery Information</h2>
          <form onSubmit={handleSubmit}>
            {/* First Name Input */}
            <div className="mb-3">
              <input
                type="text"
                name="firstName"
                className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
            </div>

            {/* Last Name Input */}
            <div className="mb-3">
              <input
                type="text"
                name="lastName"
                className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
            </div>

            {/* Email Input */}
            <div className="mb-3">
              <input
                type="email"
                name="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            {/* Address Input */}
            <div className="mb-3">
              <input
                type="text"
                name="address"
                className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
              />
              {errors.address && <div className="invalid-feedback">{errors.address}</div>}
            </div>

            {/* City Input */}
            <div className="mb-3">
              <input
                type="text"
                name="city"
                className={`form-control ${errors.city ? 'is-invalid' : ''}`}
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
              />
              {errors.city && <div className="invalid-feedback">{errors.city}</div>}
            </div>

            {/* Zip Code Input */}
            <div className="mb-3">
              <input
                type="text"
                name="zipCode"
                className={`form-control ${errors.zipCode ? 'is-invalid' : ''}`}
                placeholder="Zip Code"
                value={formData.zipCode}
                onChange={handleChange}
              />
              {errors.zipCode && <div className="invalid-feedback">{errors.zipCode}</div>}
            </div>

            {/* Country Input */}
            <div className="mb-3">
              <input
                type="text"
                name="country"
                className={`form-control ${errors.country ? 'is-invalid' : ''}`}
                placeholder="Country"
                value={formData.country}
                onChange={handleChange}
              />
              {errors.country && <div className="invalid-feedback">{errors.country}</div>}
            </div>

            {/* Phone Number Input */}
            <div className="mb-3">
              <input
                type="text"
                name="phoneNumber"
                className={`form-control ${errors.phoneNumber ? 'is-invalid' : ''}`}
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
              {errors.phoneNumber && <div className="invalid-feedback">{errors.phoneNumber}</div>}
            </div>
          </form>
        </div>

        {/* Right Column for Shipment Option, Cart Totals, and Proceed to Payment */}
        <div className="col-md-4">
          {/* Shipment Option */}
          <fieldset className="mb-3">
            <legend className='shipment'>Shipment Option</legend>
            <div className="form-check">
              <input
                type="radio"
                id="dhl"
                name="shipmentOption"
                value="dhl"
                className="form-check-input"
                checked={shipmentOption === 'dhl'}
                onChange={handleShipmentChange}
              />
              <label htmlFor="dhl" className="form-check-label">
                DHL (40 to 90 days) - R0.00
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                id="airFreight"
                name="shipmentOption"
                value="air"
                className="form-check-input"
                checked={shipmentOption === 'air'}
                onChange={handleShipmentChange}
              />
              <label htmlFor="airFreight" className="form-check-label">
                Air Freight (2 to 5 days) - R500
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                id="seaFreight"
                name="shipmentOption"
                value="sea"
                className="form-check-input"
                checked={shipmentOption === 'sea'}
                onChange={handleShipmentChange}
              />
              <label htmlFor="seaFreight" className="form-check-label">
                Sea Freight (15 to 30 days) - R300
              </label>
            </div>
          </fieldset>

          {/* Cart Totals */}
          <div className="cart-totals mb-3">
            <h3>Cart Totals</h3>
            <div className="total-item">
              <span>Subtotal:</span>
              <span>R{subtotal.toFixed(2)}</span>
            </div>
            <div className="total-item">
              <span>Shipment Fee:</span>
              <span>R{shipmentFee.toFixed(2)}</span>
            </div>
            <div className="total-item total">
              <span>Total:</span>
              <span>R{total.toFixed(2)}</span>
            </div>
          </div>

          {/* Proceed to Payment Button */}
          <button
            type="submit"
            className="btn btn-primary w-100"
            onClick={handleSubmit}
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
