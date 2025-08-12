import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderSectionOne from './components/HeaderSectionOne';
import Navbar from './components/Navbar';
import HomePage from './components/Home';
import BookDetailPage from './components/BookDetailPage';
import { useSmoothScroll } from './hook/useSmoothScroll'; 
import Footer from './components/Footer';
import Books from './components/Books';
import Wishlist from './components/Wishlist';
import StaffDashboard from './components/Staff-dash';
import MyOrders from './components/MyOrders';
import RegisterPage from './components/RegisterPage';
import ProfilePage from './components/ProfilePage';

function App() {
  useSmoothScroll();
  
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === book.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...book, quantity: 1 }];
    });
  };

  return (
    <Router>
      <div className="App">
        <HeaderSectionOne />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route 
              path="/books" 
              element={
                <Books 
                  wishlist={wishlist}
                  setWishlist={setWishlist}
                  cart={cart}
                  setCart={setCart}
                  addToCart={addToCart}
                />
              } 
            />
            <Route path="/books/:slug" element={<BookDetailPage />} />
            <Route 
              path="/wishlist" 
              element={
                <Wishlist 
                  wishlist={wishlist}
                  setWishlist={setWishlist}
                  addToCart={addToCart}
                />
              } 
            />
            {/* Simple staff dashboard route */}
            <Route path="/staff" element={<StaffDashboard />} />
            {/* Add the new MyOrders route */}
            <Route path="/my-orders" element={<MyOrders />} />
            <Route path="/member-register" element={<RegisterPage />} />
            <Route path="/my-profile" element={<ProfilePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;