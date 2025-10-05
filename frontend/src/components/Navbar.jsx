import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ user, cartCount, onLogout }) {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">JewelShop</Link>
      <div className="nav-links">
        {user ? (
          <>
            <span className="username">Hello, {user.username}</span>
            <Link to="/cart" className="cart">🛒 Cart ({cartCount})</Link>
            <button className="logout-btn" onClick={onLogout}>Logout</button>
          </>
        ) : (
          <>
            {/* Only Signup link is shown */}
            <Link to="/signup" className="nav-btn">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
