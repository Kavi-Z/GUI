import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductList = ({ products, refreshProducts }) => {
  const deleteProduct = (id) => {
    axios.delete(`http://localhost:3000/api/product/${id}`)
      .then(() => refreshProducts())
      .catch((error) => console.error('Error deleting product:', error));
  };

  return (
    <div>
      <h1>Product List</h1>
      <Link to="/add">
        <button>Add Product</button>
      </Link>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <strong>{product.name}</strong>: {product.description} - ${product.price}
            <Link to={`/edit/${product._id}`}>
              <button>Edit</button>
            </Link>
            <button onClick={() => deleteProduct(product._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
