import React from 'react';
import { Card } from 'react-bootstrap';
import './Help.css';

const Help = () => {
  return (
    <div className="help-page">
      <Card className="help-card">
        <Card.Body>
          <Card.Title><h2>Help Center</h2></Card.Title>
          <Card.Text>
            <h3>How to Contact Us</h3>
            <p>You can contact us via email at support@Dejong.com or call us at (123) 400-7000.</p>
          </Card.Text>
          <Card.Text>
            <h3>How to Track an Order</h3>
            <p>To track your order, go to the Orders page and enter your order ID and email address.</p>
          </Card.Text>
          <Card.Text>
            <h3>Placing an Order</h3>
            <p>If you are having difficulties placing an order, please check our FAQ section or contact our support team.</p>
          </Card.Text>
          <Card.Text>
            <h3>Refunds</h3>
            <p>For information on refunds, please visit our Refund Policy page or contact our support team.</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Help;
