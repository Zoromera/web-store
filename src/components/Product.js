import React, { useState } from 'react';
import './Product.css';

const Product = ({ id, image, name, description, price, onAddToCart, onRemoveFromCart }) => {
  // Initialize state for the quantity of the product
  const [quantity, setQuantity] = useState(0);

  // Handler for the "Buy" button
  const handleBuy = () => {
    setQuantity(1); // Set the quantity to 1 when buying the product
    onAddToCart(id, 1); // Call the onAddToCart function with product ID and quantity 1
  };

  // Handler for increasing the quantity
  const handleIncrease = () => {
    setQuantity(quantity + 1); // Increment the quantity state
    onAddToCart(id, quantity + 1); // Update the cart with the new quantity
  };

  // Handler for decreasing the quantity
  const handleDecrease = () => {
    if (quantity > 0) { // Only allow decreasing if quantity is greater than 0
      setQuantity(quantity - 1); // Decrement the quantity state
      onRemoveFromCart(id, quantity - 1); // Update the cart with the new quantity
    }
  };

  return (
    <div className="product-card">
      <img src={image} alt={name} /> {/* Display the product image */}
      <h3>{name}</h3> {/* Display the product name */}
      <p>{description}</p> {/* Display the product description */}
      <p className="price">R{price.toFixed(2)}</p> {/* Display the product price formatted to 2 decimal places */}
      {quantity === 0 ? (
        <button className="buy-button" onClick={handleBuy}>Buy</button> // Show "Buy" button if quantity is 0
      ) : (
        <div className="quantity-controls">
          <button className="quantity-button" onClick={handleDecrease}>-</button> {/* Button to decrease quantity */}
          <span>{quantity}</span> {/* Display the current quantity */}
          <button className="quantity-button" onClick={handleIncrease}>+</button> {/* Button to increase quantity */}
        </div>
      )}
    </div>
  );
};

export default Product;
