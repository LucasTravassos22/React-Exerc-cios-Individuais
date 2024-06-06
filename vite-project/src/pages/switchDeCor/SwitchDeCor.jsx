import { useEffect, useState } from "react";

const SwitchDeCor = () => {
  const [corDeFundo, setCorDeFundo] = useState("#FFFFFF");
  const [corDoMomentoIndex, setCorDoMomentoIndex] = useState(0);

  const cores = [
    "#FF5733",
    "#ff33be",
    "#33b4ff",
    "#f09400"
  ];

  const mudaCor = () => {
    const novoIndex = (corDoMomentoIndex + 1) % cores.length;
    setCorDoMomentoIndex(novoIndex);
  };

  useEffect(() => {
    setCorDeFundo(cores[corDoMomentoIndex]);
  }, [corDoMomentoIndex]);

  return (
    <div style={{ backgroundColor: corDeFundo, maxHeight: "100vh", maxWidth: "100vh", padding: "190px"}}>
      <h1>Switch de Cor:</h1>
      <p>Cor De Fundo: <strong>{corDeFundo}</strong></p>
      <button onClick={mudaCor}>Mudar Cor</button>
    </div>
  );
};

export default SwitchDeCor;