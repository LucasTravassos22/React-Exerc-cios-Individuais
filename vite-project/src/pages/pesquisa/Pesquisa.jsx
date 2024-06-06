import { useState } from "react"

export function Pesquisar() {
    const jogos = [
        "Until Dawn",
        "Beyond: Two Souls",
        "Mass Effect Legendary Edition",
        "The Witcher 3",
        "Detroit: Become Human",
        "Heavy Rain",
        "The Sims 3",
        "RollerCoaster Tycoon 3 Platinum",
        "Crash Bandicoot N. Sane Trilogy"]

    const [listaJogos, setListaJogos] = useState(jogos)
    const [termoDeBusca, setTermoDeBusca] = useState("");
    
    const lidarComPesquisa = (e) => {
        const procura = e.target.value;
        setTermoDeBusca(procura);

        const filtro = jogos.filter(jogo => jogo.toLowerCase().includes(procura.toLowerCase()));
        setListaJogos(filtro);
    };  

    return (
        <div style={{ display: "flex", justifyContent: "center"}}>
            <div style={{ backgroundColor: "gray", padding: "16px", borderRadius: "20px", boxShadow: "10px 8px 8px rgba(0, 0, 0, 0.1)", maxWidth: "400px", width: "100%"}}>
                 <input 
                    type="text"
                    name="jogo"
                    value={termoDeBusca}
                    onChange={lidarComPesquisa}
                    placeholder="Pesquisar jogos..."
                    style={{ marginBottom: "10px", width: "80%", padding: "10px", borderRadius: "5px", border: "1px solid #000000", backgroundColor: "black"}}
                />
                <ul style={{ maxHeight: "250px", overflowY: "auto" , padding: "50px"}}>
                {
                    listaJogos.map((jogo, index) => (<li key={index}>{jogo}</li>))
                }
                </ul>
            </div>
        </div>
    )
}