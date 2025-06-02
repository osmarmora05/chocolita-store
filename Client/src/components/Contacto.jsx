// src/components/Contacto.jsx
import React from "react";
import "./Contacto.css";

const Contacto = () => {
  return (
    <div className="contacto-container">
      <h2>Contacto</h2>
      <p>
        ¡Gracias por visitar <strong>Chocolita Store</strong>! Somos una tienda orgullosamente dedicada a compartir lo mejor de los productos centroamericanos con el mundo.
      </p>
      <p>
        Chocolita Store celebra la riqueza y calidez de Centroamérica.
      </p>
      <p>
        ¿Tenés alguna pregunta, sugerencia o querés colaborar con nosotros? No dudes en escribirnos.
      </p>

      <div className="contacto-info">
        <p><strong>Correo:</strong> hola@chocolitastore.com</p>
        <p><strong>Teléfono:</strong> +505 8867 6493</p>
        <p><strong>Dirección:</strong> Managua, Nicaragua</p>
      </div>

      <p>También podés seguirnos en nuestras redes sociales para estar al tanto de nuevos productos y promociones. ¡Gracias por apoyar lo local! 🇳🇮🇸🇻🇬🇹🇭🇳🇨🇷🇵🇦</p>
    </div>
  );
};

export default Contacto;
