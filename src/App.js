import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import AddProduct from './AddProduct';
import './styles.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-product" element={<AddProduct />} />
        </Routes>
        <footer className="app-footer">
          &copy; {new Date().getFullYear()} Product Application using React. All rights reserved.
        </footer>
      </div>
    </Router>
  );
};

export default App;