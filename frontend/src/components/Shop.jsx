import React from "react";
import "./Shop.css";

function Shop({ products, addToCart }) {
  return (
    <div className="shop-container">
      <h1>Our Jewelry Collection</h1>
      <div className="shop-items">
        {products.map((item) => (
          <div key={item.id} className="shop-item">
            <img src={item.img} alt={item.name} style={{ width: "100%", borderRadius: "10px" }} />
            <h2>{item.name}</h2>
            <p>₹{item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
