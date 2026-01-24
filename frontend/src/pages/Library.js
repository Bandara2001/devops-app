import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Library.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const genres = [
  {
    name: "Fiction",
    books: [
      { title: "The Alchemist", author: "Paulo Coelho", price: 12, img: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383" },
      { title: "1984", author: "George Orwell", price: 15, img: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383" },
      { title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 1400, img: "https://images.unsplash.com/photo-1532012197267-da84d127e765" },
      { title: "To Kill a Mockingbird", author: "Harper Lee", price: 1300, img: "https://images.unsplash.com/photo-1544937950-fa07a98d237f" },
      { title: "Moby Dick", author: "Herman Melville", price: 1800, img: "https://images.unsplash.com/photo-1544717302-de2939b7ef71" },
    ],
  },
  {
    name: "Science",
    books: [
      { title: "A Brief History of Time", author: "Stephen Hawking", price: 1700, img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac" },
      { title: "The Selfish Gene", author: "Richard Dawkins", price: 1600, img: "https://images.unsplash.com/photo-1516972810927-80185027ca84" },
      { title: "Cosmos", author: "Carl Sagan", price: 20, img: "https://images.unsplash.com/photo-1473187983305-f615310e7daa" },
      { title: "The Gene", author: "Siddhartha Mukherjee", price: 1800, img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f" },
      { title: "Sapiens", author: "Yuval Noah Harari", price: 1900, img: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383" },
    ],
  },
  {
    name: "Romance",
    books: [
      { title: "Pride and Prejudice", author: "Jane Austen", price: 1100, img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f" },
      { title: "Me Before You", author: "Jojo Moyes", price: 1300, img: "https://images.unsplash.com/photo-1544717302-de2939b7ef71" },
      { title: "Twilight", author: "Stephenie Meyer", price: 1000, img: "https://images.unsplash.com/photo-1532012197267-da84d127e765" },
      { title: "The Notebook", author: "Nicholas Sparks", price: 1200, img: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383" },
      { title: "Outlander", author: "Diana Gabaldon", price: 1500, img: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383" },
    ],
  },
  {
    name: "Technology",
    books: [
      { title: "Clean Code", author: "Robert C. Martin", price: 2500, img: "https://images.unsplash.com/photo-1532012197267-da84d127e765" },
      { title: "The Pragmatic Programmer", author: "Andrew Hunt", price: 2200, img: "https://images.unsplash.com/photo-1544717302-de2939b7ef71" },
      { title: "Design Patterns", author: "Erich Gamma", price: 2400, img: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383" },
      { title: "You Don’t Know JS", author: "Kyle Simpson", price: 1900, img: "https://images.unsplash.com/photo-1516972810927-80185027ca84" },
      { title: "Refactoring", author: "Martin Fowler", price: 2300, img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f" },
    ],
  },
];

const Library = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const addToCart = (book) => {
    setCart([...cart, book]);
    localStorage.setItem("cart", JSON.stringify([...cart, book]));
    toast.success("Successfully added the book to the cart");
  };

  const goToCart = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
    navigate("/cart");
  };

  return (
    <>
      <Navbar />

      <div className="library-container">
        <div className="library-header">
          <h2>Booksy Library </h2>
        </div>

        {genres.map((genre) => (
          <div key={genre.name} className="genre-section">
            <h3 className="genre-title">{genre.name}</h3>
            <div className="books-grid">
              {genre.books.map((book, index) => (
                <div key={index} className="book-card">
                  <img src={book.img} alt={book.title} className="book-img" />
                  <div className="book-info">
                    <h4>{book.title}</h4>
                    <p>{book.author}</p>
                    <p className="price">LKR {book.price}</p>
                    <button
                      className="add-to-cart-btn"
                      onClick={() => addToCart(book)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <button className="go-to-cart-btn" onClick={goToCart}>
          Go to Cart 
        </button>
      </div>

      <Footer />
    </>
  );
};

export default Library;
