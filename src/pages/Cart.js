import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Cart.css';

const CartPage = () => {
  // Get the current location object from React Router
  const location = useLocation();
  // Create a function to programmatically navigate to different routes
  const navigate = useNavigate();
  // Extract cartItems from location state if it exists; default to an empty array if not
  const cartItems = location.state ? location.state.cartItems : [];

  // Calculate the subtotal of items in the cart
  const subtotal = cartItems.reduce((total, item) => {
    // Convert item price to a number
    const price = parseFloat(item.price);
    // Convert item quantity to an integer
    const quantity = parseInt(item.quantity, 10);
    // Add the product of price and quantity to the total if both are valid
    return !isNaN(price) && !isNaN(quantity) && quantity > 0 ? total + (price * quantity) : total;
  }, 0);

  // Define shipment fee (can be adjusted based on actual requirements or logic)
  const shipmentFee = 0; // Example: Set to 0 or calculate based on criteria
  // Calculate the total cost, including shipment fee
  const total = subtotal + shipmentFee;

  // Handle the removal of an item from the cart
  const handleRemoveFromCart = (productId) => {
    // Create a new array of cart items with the specified product's quantity decreased or removed
    const updatedItems = cartItems.reduce((acc, item) => {
      if (item.id === productId) {
        // If the item exists and quantity is greater than 1, reduce quantity by 1
        if (item.quantity > 1) {
          acc.push({ ...item, quantity: item.quantity - 1 });
        }
      } else {
        // Otherwise, keep the item as is
        acc.push(item);
      }
      return acc;
    }, []);
    // Navigate to the cart page with the updated cart items
    navigate('/cart', { state: { cartItems: updatedItems } });
  };

  // Handle proceeding to the checkout page
  const handleProceedToCheckout = () => {
    // Navigate to the checkout page, passing cart items and subtotal as state
    navigate('/checkout', { state: { cartItems, subtotal } });
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Items</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>R{parseFloat(item.price).toFixed(2)}</td>
                  <td>{item.quantity}</td>
                  <td>R{(parseFloat(item.price) * item.quantity).toFixed(2)}</td>
                  <td>
                    <button className="remove-button" onClick={() => handleRemoveFromCart(item.id)}>x</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="cart-totals">
            <h3>Cart Totals</h3>
            <div className="total-item">
              <span>Subtotal:</span>
              <span>R{subtotal.toFixed(2)}</span>
            </div>
            <div className="total-item">
              <span>Service Fee:</span>
              <span>R{shipmentFee.toFixed(2)}</span>
            </div>
            <div className="total-item total">
              <span>Total:</span>
              <span>R{total.toFixed(2)}</span>
            </div>
            <button className="checkout-button" onClick={handleProceedToCheckout}>Proceed to Checkout</button>
          </div>
        </>
      ) : (
        <div className="empty-cart">
          <h3>Your cart is empty.</h3>
        </div>
      )}
    </div>
  );
};

export default CartPage;
