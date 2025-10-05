// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import JewelryList from "./components/Jewelerylist";
import Cart from "./components/Cart";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  // add item to cart (functional setState to avoid stale closures)
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      // Ensure the item has price (if you compute price earlier, use that)
      return [...prev, { ...product, quantity: 1, price: product.price ?? product.total ?? 0 }];
    });
  };

  // remove item completely from cart
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // decrease quantity by 1; if quantity becomes 0, remove item
  const decreaseQuantity = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // increase quantity by 1
  const increaseQuantity = (id) => {
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
    );
  };

  const totalItems = cart.reduce((sum, i) => sum + i.quantity, 0);

  const handleLogout = () => setUser(null);

  return (
    <Router>
      <Navbar user={user} cartCount={totalItems} onLogout={handleLogout} />

      <Routes>
        <Route path="/" element={<Hero user={user} />} />
        <Route path="/shop" element={user ? <JewelryList addToCart={addToCart} /> : <Navigate to="/login" />} />
        <Route
          path="/cart"
          element={
            user ? (
              <Cart
                cart={cart}
                removeFromCart={removeFromCart}
                decreaseQuantity={decreaseQuantity}
                increaseQuantity={increaseQuantity}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
      </Routes>
    </Router>
  );
}

export default App;
