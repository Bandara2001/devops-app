import React, { useEffect, useState } from "react";
import "../styles/Cart.css";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) setCart(JSON.parse(saved));
  }, []);

  const removeItem = (title) => {
    const updated = cart.filter((book) => book.title !== title);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-container">
      <h2 className="cart-header">Your Cart 🛒</h2>
      <div className="cart-items">
        {cart.length === 0 ? (
          <p>No books added yet!</p>
        ) : (
          cart.map((book, i) => (
            <div key={i} className="cart-item">
              <img src={book.img} alt={book.title} />
              <div className="cart-item-info">
                <h4>{book.title}</h4>
                <p>${book.price}</p>
              </div>
              <button
                className="remove-btn"
                onClick={() => removeItem(book.title)}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
      {cart.length > 0 && (
        <div className="total-section">
          Total: ${total}
          <br />
          <button className="checkout-btn">Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
