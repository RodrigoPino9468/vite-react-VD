import React from "react";

export default function DonarOnline() {
  return (
    <div className="centered-iframe">
      <iframe src={import.meta.env.VITE_DONAR_ONLINE} width="90%" height="1600" style={{ border: 0 }}></iframe>
    </div>
  );
}
