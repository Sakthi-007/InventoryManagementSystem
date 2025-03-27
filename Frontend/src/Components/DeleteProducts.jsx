import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DeleteProducts.css';

const DeleteProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
 
  useEffect(() => {
    // Fetch products from the backend API
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3030/product/getP');
        setProducts(response.data); // Assuming the API returns an array of products
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to fetch products. Please try again later.');
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (prod_id) => {
    try {
      // Send a DELETE request to the backend API
      const response = await axios.delete(`http://localhost:3030/product/deleteP/${prod_id}`);
      if (response.status === 200) {
        setMessage(`Product with ID ${prod_id} deleted successfully!`);
        // Remove the deleted product from the state
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.prod_id !== prod_id)
        );
      }
    } catch (err) {
      console.error('Error deleting product:', err);
      setError('Failed to delete product. Please try again.');
    }
  };

  return (
    <div className="section">
      <h2 className="section-title">Delete Products</h2>
      {error && <p className="error-message">{error}</p>}
      {message && <p className="success-message">{message}</p>}
      <table className="product-table">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.prod_id}>
              <td>{product.prod_id}</td>
              <td>{product.productname}</td>
              <td>{product.description}</td>
              <td>{product.category}</td>
              <td>${product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(product.prod_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeleteProducts;