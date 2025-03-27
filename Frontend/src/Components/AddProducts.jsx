import React, { useState } from 'react';
import axios from 'axios';
import './AddProducts.css';

const AddProducts = () => {
  const [newProduct, setNewProduct] = useState({
    prod_id: '',
    productname: '',
    description: '',
    category: '',
    price: '',
    quantity: '',
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      // Send a POST request to the backend API
      const response = await axios.post('http://localhost:3030/product/createP', newProduct);

      if (response.status === 200) {
        setMessage('Product added successfully!');
        setNewProduct({
          prod_id: '',
          productname: '',
          description: '',
          category: '',
          price: '',
          quantity: '',
        });
      }
    } catch (err) {
      console.error('Error adding product:', err);
      setError('Failed to add product. Please try again.');
    }
  };

  return (
    <div className="section">
      <div className="card">
        <h2 className="card-title">Add New Product</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="prod_id">Product ID</label>
            <input
              type="text"
              id="prod_id"
              name="prod_id"
              value={newProduct.prod_id}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="productname">Product Name</label>
            <input
              type="text"
              id="productname"
              name="productname"
              value={newProduct.productname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={newProduct.description}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              id="category"
              name="category"
              value={newProduct.category}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              name="price"
              value={newProduct.price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={newProduct.quantity}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-button">Add Product</button>
        </form>
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default AddProducts;