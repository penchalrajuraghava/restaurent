import "react";
import { createContext, useState } from "react";
import { food_items } from "../food";

export const datacontext = createContext();

const UserContext = ({ children }) => {
  let [input, setInput] = useState("");
  const [cate, Setcate] = useState(food_items);

  // Cart State
  const [cart, setCart] = useState([]);

  // ✅ Added
  const [showCart, setShowCart] = useState(false);

  // Add Item To Cart
  const addToCart = (item) => {
    const exist = cart.find((product) => product.id === item.id);

    if (exist) {
      setCart(
        cart.map((product) =>
          product.id === item.id
            ? { ...product, qty: product.qty + 1 }
            : product,
        ),
      );
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  // Increase Quantity
  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item,
      ),
    );
  };

  // Decrease Quantity
  const decreaseQty = (id) => {
    setCart(
      cart
        .map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
        .filter((item) => item.qty > 0),
    );
  };

  // Remove Item
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Empty Cart
  const clearCart = () => {
    setCart([]);
  };

  let data = {
    input,
    setInput,
    cate,
    Setcate,

    cart,
    addToCart,
    increaseQty,
    decreaseQty,
    removeItem,
    clearCart,

    // ✅ Added
    showCart,
    setShowCart,
  };

  return (
    <div>
      <datacontext.Provider value={data}>{children}</datacontext.Provider>
    </div>
  );
};

export default UserContext;
