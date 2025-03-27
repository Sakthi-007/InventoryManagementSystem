import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./ShowProducts.css";

const ShowProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

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

  return (
    <div className="section">
      <h2 className="section-title">Show Products</h2>
      {error && <p className="error-message">{error}</p>}
      <table className="product-table">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowProducts;