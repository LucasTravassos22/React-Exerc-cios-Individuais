import "./App.css";

//Exercício 1
// import { ListaDeMontanhasrussas } from "./pages/listaDeMontanhasrussa/ListaDeMontanhasrussas";
// import { useState } from "react";

//Exercício 2
//import Relogio from "./pages/relogio/Relogio";

//Exercício 3
//import Forms from "./components/Form/Forms.jsx";

//Exercício 4
//import {Pesquisar} from "./pages/pesquisa/Pesquisa"

//Junção pelo routes
import { Rotas } from "./routes/Routes";
import { BrowserRouter } from "react-router-dom";

//Exercício 1:

// function App() {
//   const [contador, setContador] = useState(0);

//   function contar() {
//     setContador(contador + 1);
//   }

//   return (
//     <>
//         <ListaDeMontanhasrussas/>
//     </>
//   );
// }

//Exercício 2:

// const App = () => {
//   return (
//     <div className="App">
//       <h2>Tempo</h2>
//       < Relogio />
//     </div>
//   );
// };

//Exercício 3:

// function App() {
//   return (
//     <div>
//       <Forms />
//     </div>
//   );
// }

//Exercício 4:

// function App() {
//   return (
//     <div>
//       <Pesquisar />
//     </div>
//   );
// }

//Junção dos exercícios + Desafio pelo routes:

function App() {
  return (
    <BrowserRouter>
      <Rotas />
    </BrowserRouter>
  );
}

export default App;