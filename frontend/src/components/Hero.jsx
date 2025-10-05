import React from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

function Hero({ user }) {
  const navigate = useNavigate();

  const handleShopNow = () => {
    if (user) navigate("/shop");
    else navigate("/signup");
  };

  return (
    <div className="hero-container">
      <h1>Welcome to JewelShop</h1>
      <p>Discover beautiful jewelry for every occasion!</p>
      {user && <p>Hello, {user.username}!</p>}
      <button className="shop-now-btn" onClick={handleShopNow}>
        Shop Now
      </button>
    </div>
  );
}

export default Hero;
