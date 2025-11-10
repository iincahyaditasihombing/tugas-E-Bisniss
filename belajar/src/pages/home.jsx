import React from "react";

export default function home() {
  return (
    <div>
      <h2>Home</h2>
      <p>Selamat datang di aplikasi rekomendasi mata kuliah. Pilih menu untuk melihat halaman lain.</p>
      {/* Kalau mau, tambahkan form nama/semester sesuai tugas */}
      <section>
        <h3>Input Nama dan Semester</h3>
        <form onSubmit={(e)=>e.preventDefault()}>
          <label>
            Nama:
            <input type="text" name="nama" placeholder="Masukkan nama" />
          </label>
          <br/>
          <label>
            Semester:
            <input type="number" name="semester" min="1" max="14" />
          </label>
        </form>
      </section>
    </div>
  );
}
