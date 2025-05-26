import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img className="product-img" src={product.image} alt={product.title} />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-description">{product.description.slice(0, 50)}...</p>
      <p className="product-price">${product.price}</p>
      <button className="add-btn">+</button>
    </div>
  );
};

export default ProductCard;