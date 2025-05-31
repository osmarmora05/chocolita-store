import React from 'react';
import './ProductModal.css';
import { useCart } from '../hooks/useCart';

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  const { addToCart } = useCart()

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img className="modal-image" src={product.imagen} alt={product.nombre} />
        <div className="modal-details">
          <h2>{product.nombre}</h2>
          <p className="modal-description">{product.descripcion}</p>
          <p className="modal-price">${product.precio}</p>
          <button className="modal-add-btn" onClick={()=> addToCart(product)}>Agregar al carrito</button>
        </div>
        <button className="modal-close-btn" onClick={onClose}>×</button>
      </div>
    </div>
  );
};

export default ProductModal;
