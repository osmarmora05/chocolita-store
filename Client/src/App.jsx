import React, { useState } from "react";
import Catalog from "./components/Catalog";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { Toaster } from "sonner";
import "./App.css";
import HistorialVentas from "./components/HistorialVentas";
import Contacto from "./components/Contacto";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="App">
      <header className="header">
        <div className="logo">
          <img src="/logo-chocolita-store.png" alt="Chocolita Store" />
          <h1>Chocolita Store</h1>
        </div>
        <nav>
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("catalog")}>Catálago</button>
          <button onClick={() => setPage("carrito")}>Carrito de compras</button>
          <button onClick={() => setPage("contacto")}>Contacto</button>
          <button onClick={() => setPage("historialVentas")}>Historial de ventas</button>
        </nav>
      </header>

      <main>
        {page === "home" && <Home />}
        {page === "catalog" && (
          <>
            <h2 className="catalog-title">Catálogo</h2>
            <Catalog />
          </>
        )}
        {page === "carrito" && <Cart />}
        {page === "contacto" && <Contacto />}
        {page === "historialVentas" && <HistorialVentas />}
      </main>
      <Toaster />
    </div>
  );
}

export default App;
