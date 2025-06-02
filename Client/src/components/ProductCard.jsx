import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const visibleButton = product.visibleButton ? false : true;
  return (
    <div className="product-card">
      <img className="product-img" src={product.imagen} alt={product.nombre} />
      <h3 className="product-title">{product.nombre}</h3>
      <p className="product-description">{product.descripcion.slice(0, 50)}...</p>
      <p className="product-price">${product.precio}</p>
      {
        visibleButton ?
          <button className="add-btn">+</button> : ""
      }
    </div>
  );
};

export default ProductCard;