import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./HistorialVentas.css";
import { API_URL } from "../config";

const HistorialVentas = () => {
  const [ventas, setVentas] = useState([]);
  const [detalles, setDetalles] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVentas = async () => {
      try {
        const resVentas = await fetch(`${API_URL}/ventas`);
        const ventasData = await resVentas.json();

        if (!Array.isArray(ventasData)) {
          throw new Error("Formato de ventas inválido");
        }

        console.log("Fechas sin ordenar:", ventasData.map(v => v.fecha));


        // Ordenar ventas por fecha descendente
        const ordenadas = ventasData.sort((a, b) => b.venta_id - a.venta_id);

        setVentas(ordenadas);
        
        // Obtener detalles solo después de establecer ventas
        const detallesTemp = {};
        for (const venta of ordenadas) {
          const resDetalle = await fetch(`${API_URL}/detalle?venta_id=${venta.venta_id}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          });

          const detalleData = await resDetalle.json();
          detallesTemp[venta.venta_id] = Array.isArray(detalleData)
            ? detalleData
            : [];
        }

        setDetalles(detallesTemp);
      } catch (err) {
        console.error("Error cargando historial:", err);
        setError("Error al cargar historial de ventas");
      }
    };

    fetchVentas();
  }, []);

  if (error) return <div className="error">{error}</div>;

  return (
    <div className="historial-container">
      <h2>Historial de Ventas</h2>
      {ventas.length === 0 ? (
        <p>No hay ventas registradas.</p>
      ) : (
        ventas.map((venta) => {
          const productos = detalles[venta.venta_id] || [];
          const totalVenta = productos.reduce((acc, item) => {
            const total = parseFloat(item.total);
            return acc + (isNaN(total) ? 0 : total);
          }, 0);

          return (
            <div key={venta.venta_id} className="venta-bloque">
              <h3 className="TituloVenta">Venta #{venta.venta_id}</h3>
              <p className="TituloVenta">Fecha: {new Date(venta.fecha).toLocaleDateString()}</p>
              <div className="productos-grid">
                {productos.map((item, index) => (
                  <ProductCard
                    key={item.detalle_id ?? index}
                    product={{
                      nombre: item.producto,
                      imagen: item.imagen,
                      descripcion: `Cantidad: ${item.cantidad}`,
                      precio: item.precio,
                      visibleButton: true,
                    }}
                  />
                ))}
              </div>
              <h4 className="venta-total">
                Total de la venta: ${totalVenta.toFixed(2)}
              </h4>
            </div>
          );
        })
      )}
    </div>
  );
};

export default HistorialVentas;
