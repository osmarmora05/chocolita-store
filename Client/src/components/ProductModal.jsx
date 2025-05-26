import React from 'react';
import './ProductModal.css';

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img className="modal-image" src={product.image} alt={product.title} />
        <div className="modal-details">
          <h2>{product.title}</h2>
          <p className="modal-description">{product.description}</p>
          <p className="modal-price">${product.price}</p>
          <button className="modal-add-btn">Agregar al carrito</button>
        </div>
        <button className="modal-close-btn" onClick={onClose}>×</button>
      </div>
    </div>
  );
};

export default ProductModal;