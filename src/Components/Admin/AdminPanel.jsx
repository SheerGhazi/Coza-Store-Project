// AdminPanel.js
import React, { useState, useEffect } from "react";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, deleteProduct, editProduct } from "../../slices/products";

const AdminPanel = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  const [editingProduct, setEditingProduct] = useState(null);
  const [formValues, setFormValues] = useState({
    image: "",
    name: "",
    type: "",
    description: "",
    price: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleAddProduct = () => {
    const newProduct = { ...formValues };
    dispatch(addProduct(newProduct));

    setFormValues({
      image: "",
      name: "",
      type: "",
      description: "",
      price: "",
    });
  };

  const handleDeleteProduct = (product) => {
    dispatch(deleteProduct(product.id));
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setFormValues(product);
  };

  const handleUpdateProduct = () => {
    const updatedProduct = { ...formValues, id: editingProduct.id };

    dispatch(editProduct(updatedProduct));

    setEditingProduct(null);
    setFormValues({
      image: "",
      name: "",
      type: "",
      description: "",
      price: "",
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Admin Panel</h1>

      {/* Product Form */}
      <div className="mb-4 p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-medium mb-2">Manage Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-1">Picture URL</label>
            <input
              type="text"
              name="image"
              value={formValues.image}
              onChange={handleInputChange}
              className="px-4 py-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formValues.name}
              onChange={handleInputChange}
              className="px-4 py-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Type</label>
            <input
              type="text"
              name="type"
              value={formValues.type}
              onChange={handleInputChange}
              className="px-4 py-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Description</label>
            <textarea
              name="description"
              value={formValues.description}
              onChange={handleInputChange}
              className="px-4 py-2 border border-gray-300 rounded-md w-full h-20 resize-none"
            ></textarea>
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Price</label>
            <input
              type="number"
              name="price"
              value={formValues.price}
              onChange={handleInputChange}
              className="px-4 py-2 border border-gray-300 rounded-md w-full"
            />
          </div>
        </div>
        {editingProduct ? (
          <button
            onClick={handleUpdateProduct}
            className="btn bg-blue-500 text-white mt-4 px-4 py-2 rounded-md"
          >
            Update Product
          </button>
        ) : (
          <button
            onClick={handleAddProduct}
            className="btn bg-green-500 text-white mt-4 px-4 py-2 rounded-md"
          >
            Add Product
          </button>
        )}
      </div>

      {/* List of Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onDelete={handleDeleteProduct}
            onEdit={handleEditProduct}
          />
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
