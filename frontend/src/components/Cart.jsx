import React, { useState } from "react";
import "./Cart.css";

function Cart({ cart, removeFromCart }) {
  const [step, setStep] = useState("cart"); 
  const [details, setDetails] = useState({
    name: "",
    address: "",
    phone: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("online");
  const [error, setError] = useState("");

  if (cart.length === 0)
    return <p className="empty-cart">🛒 Your cart is empty. Time to shop some sparkle ✨</p>;

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    // Validate personal details before moving to payment
    if (!details.name || !details.address || !details.phone) {
      setError("Please fill all personal details before proceeding.");
      return;
    }
    setError("");
    setStep("payment");
  };

  return (
    <div className="cart-container">
      <h2 className="cart-heading">🖤 Your JewelShop Cart</h2>

      {step === "cart" && (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="item-info">
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>
                <p>Qty: {item.quantity}</p>
              </div>
              <div className="item-total">₹{item.price * item.quantity}</div>
              <button className="remove-btn" onClick={() => removeFromCart(item.id)}>✖</button>
            </div>
          ))}
          <h3 className="cart-total">Total: ₹{totalPrice}</h3>
          <button className="proceed-btn" onClick={() => setStep("details")}>
            Proceed to Checkout →
          </button>
        </>
      )}

      {step === "details" && (
        <div className="details-form">
          <h3>📋 Enter Your Details</h3>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={details.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={details.address}
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={details.phone}
            onChange={handleChange}
          />
          {error && <p className="error-msg">{error}</p>}
          <button className="next-btn" onClick={handleNext}>
            Next →
          </button>
        </div>
      )}

      {step === "payment" && (
        <div className="payment-form">
          <h3>💳 Select Payment</h3>
          <label className="payment-option">
            <input
              type="radio"
              value="online"
              checked={paymentMethod === "online"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <h3>Secure Online Payment</h3>
          </label>
          <button className="next-btn" onClick={() => setStep("confirm")}>
            Continue →
          </button>
        </div>
      )}

      {step === "confirm" && (
        <div className="confirm-box">
          <h3>✔ Review & Confirm</h3>
          <p><strong>Name:</strong> {details.name}</p>
          <p><strong>Address:</strong> {details.address}</p>
          <p><strong>Phone:</strong> {details.phone}</p>
          <p><strong>Payment:</strong> {paymentMethod}</p>
          <h3>Total: ₹{totalPrice}</h3>
          <button className="pay-btn">💎 Pay Securely</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
