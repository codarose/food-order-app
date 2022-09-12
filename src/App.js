import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartState, updateCartState] = useState(null);

  const openCart = () => {
    updateCartState(true);
  };

  const closeCart = () => {
    updateCartState(false);
  };
  return (
    <CartProvider>
      {cartState && <Cart onCloseCart={closeCart} />}
      <Header onOpenCart={openCart} />
      <Meals />;
    </CartProvider>
  );
}

export default App;
