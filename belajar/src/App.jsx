import React, { useState, useEffect } from "react";
import Kenal from "./Kenal"; // mengimpor komponen anak

function App() {
  const [pesan, setPesan] = useState("Selamat datang di React!");
  const [waktu, setWaktu] = useState(new Date().toLocaleTimeString());

  // useEffect dijalankan setelah komponen pertama kali dimuat
  useEffect(() => {
    const timer = setInterval(() => {
      setWaktu(new Date().toLocaleTimeString());
    }, 1000);

    // cleanup agar tidak terjadi memory leak
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial" }}>
      <h1>Program Simple useEffect</h1>
      <Kenal nama="Iin Cahyadita" pesan={pesan} />
      <h3>Waktu sekarang: {waktu}</h3>
    </div>
  );
}

export default App;
