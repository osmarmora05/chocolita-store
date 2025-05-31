import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';
import './Catalog.css';
import { API_URL } from '../config';

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/productos`)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <>
      <div className="catalog-grid">
        {products.map(product => (
          <div key={product.id} onClick={() => setSelectedProduct(product)}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </>
  );
};

export default Catalog;
