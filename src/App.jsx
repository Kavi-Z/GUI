import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Body from './Components/Body/Body';
import Food from './Components/Foods/Food';
import MidBody from './Components/MidBody/Mid';
import Slider from './Components/Slider/slider';
import Footer from './Components/Footer/footer';
 
import Login from './Components/LoginPage/login';
import Signup from './Components/signup/signup';
import AddProduct from './Components/AddProduct';
import EditProduct from './Components/EditProduct';
import ProductList from './Components/ProductList';
import Dashboard from './Components/Dashboard/Dashboard'; 
import NavbarA from './Components/NavbarA/NavbarA';
 
import axios from 'axios';
 

import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const refreshProducts = () => {
    setLoading(true);
    axios
      .get('http://localhost:3000/api/products')
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Error fetching products');
        setLoading(false);
      });
  };

  useEffect(() => {
    refreshProducts();
  }, []);

  return (
    <Router>
      <div>
        {error && <div style={{ color: 'red' }}>{error}</div>}

        {loading ? (
          <div>Loading...</div>
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <>
                
                  <Navbar />
                  <Body />
                  <MidBody />
                   
                  <Food products={products} />
                  <Slider />
                  <Footer />
                </>
              }
            />

            <Route
              path="/products"
              element={<ProductList products={products} refreshProducts={refreshProducts} />}
            />

            <Route
              path="/add-product"
              element={<AddProduct refreshProducts={refreshProducts} />}
            />

            <Route
              path="/edit/:id"
              element={<EditProduct refreshProducts={refreshProducts} />}
            />

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

           
            <Route path="/dashboard" element={<><Dashboard />
           <NavbarA /></>} />  
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default App;
