import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    // contoh sederhana: jika email berisi "admin" redirect ke home
    if (email && password) {
      // lakukan validasi / panggil API di sini
      alert("Login berhasil (contoh)");
      nav("/");
    } else {
      alert("Masukkan email dan password");
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email</label><br/>
          <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required/>
        </div>
        <div>
          <label>Password</label><br/>
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)} required/>
        </div>
        <button type="submit">Masuk</button>
      </form>
    </div>
  );
}
