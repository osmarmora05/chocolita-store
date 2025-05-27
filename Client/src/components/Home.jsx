import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import './Home.css';
import ProductModal from './ProductModal';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [randomProducts, setRandomProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/api/productos')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        if (data.length > 3) {
          const shuffled = data.sort(() => 0.5 - Math.random());
          setRandomProducts(shuffled.slice(0, 3));
        } else {
          setRandomProducts(data);
        }
      });
  }, []);

  return (
    <>
      <div className="home-container">
        <header className="header"></header>

        {/* Sección Antojitos del momento (no tocar) */}
        <section className="destacados">
          <h2>¡Antojitos del momento!</h2>
          <div className="product-grid">
            {randomProducts.length > 0 ? (
              randomProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                >
                  <ProductCard key={product.id} product={product} />
                </div>
              ))
            ) : (
              <p>Cargando productos...</p>
            )}
          </div>
        </section>

        {/* Sección informativa al scrollear */}
        <section className="info-scroll">
          <div className="info-box">
            <h2>🛍️ Productos de tu día a día</h2>
            <p>
              Desde el fresco para el desayuno hasta lo que te hace falta para
              cocinar, aquí lo encontrás todo.
            </p>
          </div>
          <div className="info-box">
            <h2>🏡 Siempre cerca de vos</h2>
            <p>
              Somos tu pulpería de confianza en el barrio. Pedí por mensaje y te
              lo llevamos a casa.
            </p>
          </div>
          <div className="info-box">
            <h2>🤗 Atendido con cariño</h2>
            <p>
              Te atendemos como en familia, con una sonrisa y el mejor trato
              siempre.
            </p>
          </div>
        </section>

        {/* Footer bonito */}
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-logo">
              <img src="/logo-chocolita-store.png" alt="Chocolita Store" />
              <p>Chocolita Store</p>
            </div>
            <div className="footer-info">
              <p>📞 +505 8888 8888</p>
              <p>📍 Masaya, Nicaragua</p>
              <p>📧 contacto@chocolitastore.com</p>
            </div>
          </div>
          <p className="footer-copy">
            © {new Date().getFullYear()} Chocolita Store. Todos los derechos
            reservados.
          </p>
        </footer>
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
};

export default Home;
