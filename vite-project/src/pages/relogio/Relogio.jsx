import React, { useState, useEffect } from "react";
import "../relogio/Relogio.css"

const Relogio = () => {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const horaId = setInterval(() => setHora(new Date()), 1000);
    return () => clearInterval(horaId);
  }, []);

  return (
    <div className="relogio-container">
      <div className="relogio-time">
        {hora.toLocaleTimeString()}
      </div>
    </div>
  );
};

export default Relogio;