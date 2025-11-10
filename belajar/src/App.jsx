import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import Login from "./pages/login";

export default function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <h1 className="brand">REKOMENDASI MATKUL</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>

      {/* Bagian isi halaman */}
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </div>
  );
}
