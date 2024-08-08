// Product.js
import React from "react";

const Product = ({ product, onDelete, onEdit }) => {
  const { image, name, type, description, price } = product;

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl font-medium text-gray-900">{name}</h2>
        <div className="flex space-x-2">
          <button
            className="text-blue-600 hover:text-blue-800"
            onClick={() => onEdit(product)}
          >
            Edit
          </button>
          <button
            className="text-red-600 hover:text-red-800"
            onClick={() => onDelete(product)}
          >
            Delete
          </button>
        </div>
      </div>
      <div className="flex items-center mb-2">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 object-cover rounded-md shadow-md"
        />
        <div className="ml-4">
          <p className="text-gray-700">Type: {type}</p>
          <p className="text-gray-700">Price: ${price}</p>
        </div>
      </div>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default Product;
