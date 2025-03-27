// HomePage.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar.jsx';
import HomeSection from './Components/HomeSection.jsx';
import ShowProducts from './Components/ShowProducts.jsx';
import AddProducts from './Components/AddProducts.jsx';
import UpdateProducts from './Components/UpdateProducts.jsx';
import DeleteProducts from './Components/DeleteProducts.jsx';
import './HomePage.css';

const HomePage = ({ username }) => {
  return (
    <div className="home-container">
      <Sidebar username={username} />
      <div className="main-content">
        <h1 className="heading">Inventory Management System</h1>
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="show-products" element={<ShowProducts />} />
          <Route path="add-products" element={<AddProducts />} />
          <Route path="update-products" element={<UpdateProducts />} />
          <Route path="delete-products" element={<DeleteProducts />} />
        </Routes>
      </div>
    </div>
  );
};

export default HomePage;