import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Productdetails.css";

function ProductDetails({ products, addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2 style={{ textAlign: "center", marginTop: "20px" }}>Product not found</h2>;
  }

  return (
    <div className="product-details">
      <img src={product.img} alt={product.name} />
      <div className="details-info">
        <h2>{product.name}</h2>
        <p className="price">₹{product.price}</p>
        <p className="desc">
          This {product.name} is part of our premium jewelry collection. Crafted with care to bring elegance and beauty.
        </p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
        <button className="back-btn" onClick={() => navigate("/shop")}>← Back to Shop</button>
      </div>
    </div>
  );
}

export default ProductDetails;
