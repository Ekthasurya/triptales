// src/components/ProductDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { babyProducts } from '../products';

const ProductDetails = () => {
  const { productId } = useParams();
  const product = babyProducts.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} style={{ width: '300px' }} />
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
    </div>
  );
};

export default ProductDetails;
