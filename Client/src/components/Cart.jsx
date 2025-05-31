import "./Cart.css";
import QuantityOfProduct from "./QuantityOfProduct";
import { useCart } from "../hooks/useCart";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { API_URL } from "../config";

function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const [totalOfCart, setTotalOfCart] = useState(0);

  useEffect(() => {
    const total = cart.reduce((acc, product) => {
      const cantidad = product.cantidad || 1;
      return acc + product.precio * cantidad;
    }, 0);
    setTotalOfCart(total);
  }, [cart]);

  const handlerSubmit = () => {
    const products = {
      productos: cart.map((item) => ({
        producto_id: item.producto_id,
        cantidad: item.cantidad,
      })),
    };
    fetch(`${API_URL}/ventas`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(products),
    }).catch((error) => {
      console.error("Error making the sale:", error);
    });
    clearCart();
    toast("Compra hecha");
  };

  return (
    <>
      <h2 className="cart__title">Carrito de compras</h2>
      {cart.map((product) => {
        const quantity = product.cantidad || 1;
        const subtotal = product.precio * quantity.toFixed(2);

        const increase = () =>
          updateQuantity(product.producto_id, quantity + 1);
        const decrease = () =>
          updateQuantity(product.producto_id, quantity - 1);

        return (
          <div className="cart-card" key={product.id}>
            <div className="cart-card__main">
              <div className="cart-card__info-container">
                <img
                  src={product.imagen}
                  alt={product.nombre}
                  className="cart-card__img"
                />
                <div className="cart-card__info">
                  <div>
                    <h5 className="cart-card__name">{product.nombre}</h5>
                    <span className="cart-card__price">$ {product.precio}</span>
                  </div>
                  <QuantityOfProduct
                    value={quantity}
                    increase={increase}
                    decrease={decrease}
                  />
                </div>
              </div>

              <div className="cart-card__description">
                <details>
                  <summary>Ver descripción</summary>
                  <p>{product.descripcion}</p>
                </details>
              </div>
            </div>

            <div className="cart-card__aside">
              <span className="cart-card__subtotal">$ {subtotal}</span>
              <button onClick={() => removeFromCart(product)}>Eliminar</button>
            </div>
          </div>
        );
      })}

      {cart.length != 0 && (
        <>
          <div className="cart__footer">
            Total:
            <span>{totalOfCart}</span>
          </div>
          <hr />
          <button className="cart__buy-btn" onClick={handlerSubmit}>
            Hacer compra
          </button>
        </>
      )}
    </>
  );
}

export default Cart;
