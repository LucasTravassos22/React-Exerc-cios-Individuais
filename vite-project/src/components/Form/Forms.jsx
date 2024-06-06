import React, { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";

const Forms = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    console.log("Valor imput:", inputValue);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
      <div style={{ backgroundColor: "gray", padding: "16px", borderRadius: "20px", boxShadow: "10px 8px 8px rgba(0, 0, 0, 0.1)", maxWidth: "400px", width: "100%" }}>
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Formulário:</h1>
        <div style={{ marginBottom: "10px", width: "100%", display: "flex", justifyContent: "center" }}>
          <Input 
            value={inputValue} 
            onChange={handleInputChange} 
            style={{ width: "80%", padding: "10px", borderRadius: "5px", border: "1px solid #000000", backgroundColor: "black", color: "white" }}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button 
            onClick={handleButtonClick} 
            label="Adicionar" 
            style={{ padding: "10px", borderRadius: "5px", border: "none", backgroundColor: "black", color: "white", cursor: "pointer" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Forms;