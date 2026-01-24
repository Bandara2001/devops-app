import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Cart.css";
import { toast } from "react-toastify";

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
    toast.success("Successfully removed the book from the cart");
  };
  

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <Navbar />

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
                  <p>LKR {book.price}</p>
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
            Total: LKR {total}
            <br />
            <button className="checkout-btn">Checkout</button>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Cart;
