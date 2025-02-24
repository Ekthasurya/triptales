import React from "react";
import { useParams } from "react-router-dom";
import { babyProducts } from "../data/products";

const AllImagesPage = () => {
  const { productId } = useParams();
  const product = babyProducts.find((p) => p.id === parseInt(productId));

  if (!product) return <div>Product not found</div>;

  return (
    <div className="all-images-page">
      <h2>{product.title}</h2>
      <div className="images-grid">
        {product.images.map((image, index) => (
          <img key={index} src={image} alt={`${product.title} ${index + 1}`} className="grid-image" />
        ))}
      </div>
    </div>
  );
};

export default AllImagesPage;
