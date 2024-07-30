import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Product from "../../components/Product";
import "./Store.css";

const products = [
   // Array of product objects
  {
    id: 1,
    image: "/lap1.png",
    name: "SANSUI 1520",
    description: "A powerful laptop for professionals.",
    price: 9999.99,
  },
  {
    id: 2,
    image: "/lap2.jpg",
    name: "ACER 1250",
    description: "A sleek and stylish laptop for everyday use.",
    price: 7999.99,
  },
  {
    id: 3,
    image: "/lap7.png",
    name: "DELL LATTITUDE",
    description: "A high-performance laptop for gaming.",
    price: 10199.99,
  },
  {
    id: 4,
    image: "/lap2.jpg",
    name: "ACER 1050",
    description: "A budget-friendly laptop with great features.",
    price: 4999.99,
  },
  {
    id: 5,
    image: "/lap5.webp",
    name: "ASUS E900",
    description: "A laptop with an excellent battery life.",
    price: 6999.99,
  },
  {
    id: 6,
    image: "/lap6.png",
    name: "LENOVO TURF",
    description: "A lightweight laptop for travel.",
    price: 8999.99,
  },
  {
    id: 7,
    image: "/lap7.png",
    name: "DELL 5100",
    description: "A laptop with a stunning display.",
    price: 21099.99,
  },
  {
    id: 8,
    image: "/lap8.png",
    name: "DELL 6500",
    description: "A laptop with advanced security features.",
    price: 21299.99,
  },
  {
    id: 9,
    image: "/lap2.jpg",
    name: "ACER 1590",
    description: "A high-end laptop for creative professionals.",
    price: 21399.99,
  },
  {
    id: 10,
    image: "/lap10.jpg",
    name: "APPLE V320",
    description: "A laptop with the latest technology.",
    price: 21499.99,
  },
  {
    id: 11,
    image: "/lap8.png",
    name: "LENOVO G320",
    description: "A durable laptop for rough use.",
    price: 9599.99,
  },
  {
    id: 12,
    image: "/laptop1.jpeg",
    name: "APPLE Q510",
    description: "A laptop with a stylish design.",
    price: 19199.99,
  },
];


const Store = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const handleAddToCart = (productId) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === productId);
      if (existingItem) {
        // Update quantity if item already exists in cart
        return prevItems.map(item =>
          item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Add new item to cart
        const product = products.find(p => p.id === productId);
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === productId);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          // Decrease quantity if more than one
          return prevItems.map(item =>
            item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
          );
        } else {
          // Remove item if quantity is one
          return prevItems.filter(item => item.id !== productId);
        }
      }
      return prevItems;
    });
  };

  const goToCart = () => {
    navigate('/cart', { state: { cartItems } });
  };

  return (
    <div className="store-container">
      <div className="product-grid">
        {products.map(product => (
          <Product
            key={product.id}
            {...product}
            onAddToCart={() => handleAddToCart(product.id)}
            onRemoveFromCart={() => handleRemoveFromCart(product.id)}
          />
        ))}
      </div>
      <div className="cart-signin">
        <div className="cart-icon" onClick={goToCart}>
          <img src="/cart.png" alt="Cart" />
          {cartItems.length > 0 && (
            <span className="cart-count">
              {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Store;