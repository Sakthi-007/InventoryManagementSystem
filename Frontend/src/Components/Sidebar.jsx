// Sidebar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ username }) => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <div className="user-greeting">
        {location.pathname === '/home' ? `Welcome ${username}` : username}
      </div>
      <Link to="/home/show-products" className="sidebar-item">Show Products</Link>
      <Link to="/home/add-products" className="sidebar-item">Add Products</Link>
      <Link to="/home/update-products" className="sidebar-item">Update Products</Link>
      <Link to="/home/delete-products" className="sidebar-item">Delete Products</Link>
    </div>
  );
};

export default Sidebar;