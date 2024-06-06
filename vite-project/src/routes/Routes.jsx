import { Routes, Route } from "react-router-dom";
import Forms from "../components/Form/Forms"; 
import Relogio from "../pages/relogio/Relogio";
import { ListaDeMontanhasrussas } from "../pages/listaDeMontanhasrussa/ListaDeMontanhasrussas";
import { Pesquisar } from "../pages/pesquisa/Pesquisa";
import SwitchDeCor from "../pages/switchDeCor/SwitchDeCor";

export function Rotas() {
  return (
    <Routes>
      {/* Exercício 3*/}
      <Route path="/forms" element={<Forms />} />
      {/* Exercício 2*/}
      <Route path="/relogio" element={<div className="App">
       <h2>Relógio:</h2>
       < Relogio />
       </div>} />
       {/* Exercício 1*/}
      <Route path="/lista-de-montanhas-russas" element={<ListaDeMontanhasrussas />} />
      {/* Exercício 4*/}
      <Route path="/pesquisar" element={<Pesquisar />} />
      {/*Desafio*/}
      <Route path="/switch-de-cor" element={<SwitchDeCor />} />
    </Routes>
  );
}