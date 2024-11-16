// src/components/ProductListing.js
import React from 'react';
import { Link } from 'react-router-dom';
import { babyProducts } from '../data/products';

const ProductListing = () => {
  return (
    <div>
      <h1>Baby Products</h1>
      <div className="product-list">
        {babyProducts.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.title} style={{ width: '150px' }} />
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <Link to={`/product/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
