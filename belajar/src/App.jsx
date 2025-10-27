import Kenal from "./Kenal"; // Komponen anak (child component) Anda

function App() {
  // 1. Pindahkan data ke dalam Array Objek
  const daftarMahasiswa = [
    { id: 1, nama: "Santi", umur: 20, alamat: "Medan, Sumatera Utara" },
    { id: 2, nama: "Iin Cahyadita", umur: 21, alamat: "Sidikalang, Dairi" },
    { id: 3, nama: "Tini", umur: 22, alamat: "Balige, Toba" },
  ];

  const handleButton = () => {
    alert("kamu berhasil!");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Data Mahasiswa</h1>

      {/* 2. Render komponen anak menggunakan map() */}
      {daftarMahasiswa.map((mahasiswa) => (
        <Kenal
          // Key diperlukan saat membuat daftar
          key={mahasiswa.id} 
          nama={mahasiswa.nama}
          umur={mahasiswa.umur}
          alamat={mahasiswa.alamat}
        />
      ))}
      
      <br />
      <button onClick={handleButton}>Klik Disini</button>
    </div>
  );
}

export default App;