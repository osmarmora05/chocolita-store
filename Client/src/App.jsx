//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import React from 'react';
import Catalog from './components/Catalog';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo">
          <img src="/logo-chocolita-store.png" alt="Chocolita Store" />
          <h1>Chocolita Store</h1>
        </div>
        <nav>
          <a href="#">HOME</a>
          <a href="#">Carrito de compras</a>
          <a href="#">Catálogo</a>
          <a href="#">Contacto</a>
        </nav>
      </header>

      <main>
        <h2 className="catalog-title">CATÁLOGO</h2>
        <Catalog />
      </main>

      <footer className="footer">
        <div className="logo-footer">
          <img src="/logo-chocolita-store.png" alt="Chocolita Store" />
          <p>Chocolita Store</p>
        </div>
        <div>
          <p>📞 +420 000 000 000</p>
          <p>📍 Na Plzeňce 1166/0, 150 00</p>
        </div>
        <p className="privacy">Privacy Policy</p>
      </footer>
    </div>
  );
}

export default App;