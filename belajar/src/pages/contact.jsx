import React from "react";

export default function contact() {
  return (
    <div>
      <h2>Contact</h2>
      <p>Hubungi kami: email@example.com</p>
      <form onSubmit={(e)=>{ e.preventDefault(); alert("Terima kasih, pesan terkirim!"); }}>
        <div>
          <label>Nama</label><br/>
          <input type="text" required />
        </div>
        <div>
          <label>Pesan</label><br/>
          <textarea required />
        </div>
        <button type="submit">Kirim</button>
      </form>
    </div>
  );
}
