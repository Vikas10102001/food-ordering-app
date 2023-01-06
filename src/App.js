import Header from "./components/layout/Header.js";
import Cart from "./components/cart/Cart.js";
import React, { useState } from "react";
import Meals from "./components/meals/Meals.js";
import CartContextProvider from "./store/CartContextProvider.js";
function App() {
  const [cartVisible, setCartVisible] = useState(false);
  const cartVisibleHandler = () => {
    setCartVisible(true);
    document.body.style.overflow="hidden"
  };
  const cartRemovingHandler = () => {
    setCartVisible(false);
    document.body.style['overflow-y']="scroll"
  };
  return (
    <CartContextProvider>
     {cartVisible && <Cart  onClose={cartRemovingHandler}/>}
      <Header onOpen={cartVisibleHandler}/>
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
