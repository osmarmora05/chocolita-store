import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const productInCartIndex = cart.findIndex(
      (item) => item.producto_id === product.producto_id,
    );

    if (productInCartIndex >= 0) {
      const newCart = cart.map((item, index) => {
        if (index === productInCartIndex) {
          return {
            ...item,
            cantidad: 1,
          };
        }

        return item;
      });

      console.log("Viejo en el carrito");
      setCart(newCart);
    } else {
      console.log("Nuevo en el carrito");
      setCart((prevState) => [
        ...prevState,
        {
          ...product,
          cantidad: 1,
        },
      ]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeFromCart = (product) => {
    setCart((prevState) =>
      prevState.filter((item) => item.producto_id != product.producto_id),
    );
  };
  const updateQuantity = (id, cantidad) => {
    setCart((prev) =>
      prev.map((p) => (p.producto_id === id ? { ...p, cantidad } : p)),
    );
  };
  return (
    <CartContext.Provider
      value={{ cart, addToCart, clearCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}
