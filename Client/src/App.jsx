import React, { useState } from 'react';
import Catalog from './components/Catalog';
import Home from './components/Home';
import './App.css';

function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="App">
      <header className="header">
        <div className="logo">
          <img src="/logo-chocolita-store.png" alt="Chocolita Store" />
          <h1>Chocolita Store</h1>
        </div>
        <nav>
          <button onClick={() => setPage('home')}>HOME</button>
          <button onClick={() => setPage('catalog')}>CATÁLOGO</button>
          <button onClick={() => setPage('carrito')}>Carrito de compras</button>
          <button onClick={() => setPage('contacto')}>Contacto</button>
        </nav>
      </header>

      <main>
        {page === 'home' && <Home />}
        {page === 'catalog' && (
          <>
            <h2 className="catalog-title">CATÁLOGO</h2>
            <Catalog />
          </>
        )}
        {page === 'carrito' && <p>Aquí irá el carrito...</p>}
        {page === 'contacto' && <p>Sección de contacto...</p>}
      </main>
    </div>
  );
}

export default App;
