import React from 'react';
import { useLocation } from 'react-router-dom';

const CheckoutPage = () => {
  const location = useLocation();
  const totalPrice = location.state?.totalPrice || 0; 

  const handlePayment = (method) => {
    console.log(`Payment method selected: ${method}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Checkout</h1>

      <div className="mb-8">
        <h2 className="text-xl font-medium mb-2">Total Price</h2>
        <p className="text-lg font-semibold">${totalPrice.toFixed(2)}</p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-medium mb-2">Payment Method</h2>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => handlePayment('Credit Card')}
            className="btn bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Credit Card
          </button>
          <button
            onClick={() => handlePayment('PayPal')}
            className="btn bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            PayPal
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
