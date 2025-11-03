import React from "react";

function Kenal({ nama, pesan }) {
  return (
    <div>
      <h2>Halo, {nama}!</h2>
      <p>{pesan}</p>
    </div>
  );
}

export default Kenal;
