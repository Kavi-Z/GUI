import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './EditProduct.css';

const EditProduct = ({ refreshProducts }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({ name: '', description: '', price: '' });

  useEffect(() => {
    axios.get(`http://localhost:3000/api/product/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error('Error fetching product:', error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/api/product/${id}`, product)
      .then(() => {
        toast.success('Product updated successfully!', { closeButton: false });
        refreshProducts();
        navigate('/products');
      })
      .catch((error) => {
        toast.error('Error updating product. Please try again.', { closeButton: false });
        console.error('Error updating product:', error);
      });
  };

  return (
    <>
      <ToastContainer 
        position="top-right" 
        autoClose={5000} 
        hideProgressBar={false} 
        closeButton={false} 
      />
      <form onSubmit={handleSubmit}>
        <h1>Edit Product</h1>
        <div>
          <label>Product Name:</label>
          <input type="text" name="name" value={product.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" value={product.description} onChange={handleChange} required />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" name="price" value={product.price} onChange={handleChange} required />
        </div>
        <button type="submit">Update Product</button>
      </form>
    </>
  );
};

export default EditProduct;
