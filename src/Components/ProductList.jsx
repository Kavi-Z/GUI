import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './ProductList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
const ProductList = ({ products, refreshProducts }) => {
  const deleteProduct = (id) => {
    axios.delete(`http://localhost:3000/api/product/${id}`)
      .then(() => refreshProducts())
      .catch((error) => console.error('Error deleting product:', error));
  };

  return (
    <div className="product-list-container">
      <Link to="/dashboard"><FontAwesomeIcon icon={faArrowLeft} /></Link>
      <h1>Recipe List</h1>
      <Link to="/add-product">
        <button className="add-product-btn">Add Recipe</button>
      </Link>
      <div className="product-list">
        {products.map((product) => (
          <div className="product-item" key={product._id}>
            <div className="product-name"><strong>{product.name}</strong></div>
            <div className="product-description">{product.description}</div>
            <div className="product-price">Price: ${product.price}</div>
            <div className="product-actions">
              <Link to={`/edit/${product._id}`}>
                <button className="edit-btn">Edit</button>
              </Link>
              <button className="delete-btn" onClick={() => deleteProduct(product._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
