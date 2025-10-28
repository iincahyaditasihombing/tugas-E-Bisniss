import { useState } from "react";

function Kenal() {
  // Membuat state count
  const [count, setCount] = useState(0);

  // Fungsi tambah dan reset
  const tambah = () => setCount(count + 1);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Halo! Ini contoh count button pakai useState</h2>
      <p>Kamu telah menekan tombol sebanyak:</p>
      <h3>{count} kali</h3>

      <button onClick={tambah} style={{ marginRight: "10px" }}>
        Tambah
      </button>

      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Kenal;
