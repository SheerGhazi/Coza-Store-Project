import React from "react";
import { useSelector } from "react-redux";

const EStore = () => {
  const products = useSelector((state) => state.products.products);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <div key={item.id} className="border p-4 rounded-lg shadow-lg">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover mb-4 rounded"
            />
            <h2 className="text-xl font-bold mb-2">{item.name}</h2>
            <p className="text-gray-700 mb-2">Category: {item.type}</p>
            <p className="text-green-600 font-semibold mb-2">{item.price} $</p>
            <p className="text-gray-500">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EStore;
