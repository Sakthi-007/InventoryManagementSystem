import React, { useState } from 'react';
import axios from 'axios';
import './UpdateProducts.css';

const UpdateProducts = () => {
  const [updateData, setUpdateData] = useState({
    prod_id: '',
    price: '',
    quantity: '',
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      // Send a PUT request to the backend API
      const response = await axios.put(
        `http://localhost:3030/product/updatePrice/${updateData.prod_id}`,
        null,
        {
          params: {
            price: updateData.price,
            quantity: updateData.quantity,
          },
        }
      );

      if (response.status === 200) {
        setMessage('Product updated successfully!');
        setUpdateData({
          prod_id: '',
          price: '',
          quantity: '',
        });
      }
    } catch (err) {
      console.error('Error updating product:', err);
      setError('Failed to update product. Please try again.');
    }
  };

  return (
    <div className="section">
      <div className="card">
        <h2 className="card-title">Update Product</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="prod_id">Product ID</label>
            <input
              type="text"
              id="prod_id"
              name="prod_id"
              value={updateData.prod_id}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">New Price</label>
            <input
              type="number"
              id="price"
              name="price"
              value={updateData.price}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="quantity">New Quantity</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={updateData.quantity}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="submit-button">Update Product</button>
        </form>
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default UpdateProducts;