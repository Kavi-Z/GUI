import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AddProduct.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const AddProduct = ({ refreshProducts }) => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({ name: '', description: '', price: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/api/products', product)
      .then(() => {
        toast.success("Product added successfully...", { closeButton: false });
        setProduct({ name: '', description: '', price: '' });
        refreshProducts();  
        navigate('/dashboard');   
      })
      .catch((error) =>  toast.error("Failed to add product", { closeButton: false }));
  };

  return (
    <div classname='BContainer'>

    <>
      <ToastContainer 
        position="top-right" 
        autoClose={5000} 
        hideProgressBar={false} 
        closeButton={false} 
      />
      
      <form onSubmit={handleSubmit}>
        <h1>Add Recipe</h1>
        <div className='Add'>
          <div>
            <label>Recipe Name:</label>
            <input 
              type="text" 
              name="name" 
              value={product.name} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div>
            <label>Description:</label>
            <textarea 
              name="description" 
              value={product.description} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div>
            <label>Cost:</label>
            <input 
              type="number" 
              name="price" 
              value={product.price} 
              onChange={handleChange} 
              required 
            />
          </div>
        </div>
        <button type="submit" id="btn">Add Recipe</button>
      </form>
    </>
    </div>
  );
};

export default AddProduct;
