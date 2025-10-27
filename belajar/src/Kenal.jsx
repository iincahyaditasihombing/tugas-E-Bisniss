// Kenal.jsx
import React from 'react';

// Pastikan komponen menerima props (nama, umur, alamat)
function Kenal(props) {
  return (
    <div style={{ border: "1px solid #ccc", margin: "10px 0", padding: "10px" }}>
      <h2>Halo, nama saya {props.nama}</h2>
      <p>
        Umur: {props.umur} tahun. <br />
        Alamat: {props.alamat}
      </p>
    </div>
  );
}

export default Kenal;