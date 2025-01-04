import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AddProduct.css';

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
        alert('Product added successfully!');
        setProduct({ name: '', description: '', price: '' });
        refreshProducts();  
        navigate('/');   
      })
      .catch((error) => console.error('Error adding product:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add Product</h1>
      <div className='Add'>
      <div >
        <label>Product Name:</label>
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
        <label>Price:</label>
        <input 
          type="number" 
          name="price" 
          value={product.price} 
          onChange={handleChange} 
          required 
        />
      </div>
      </div>
      <button type="submit" id="btn">Add Product</button>
    </form>
  
  );
};

export default AddProduct;
