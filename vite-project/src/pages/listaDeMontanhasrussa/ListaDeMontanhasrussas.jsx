import { useState } from "react";

export function ListaDeMontanhasrussas(){
        const listaMontanhasrussas = [
            {
                id:1,
                nome:"FireWhip"
            },
            {
                id:2,
                nome:"VelociCoaster"
            },
            {
                id:3,
                nome:"Mako"
            },
            {
                id:4,
                nome:"F.L.Y."
            },
            {
                id:5,
                nome:"Taron"
            }
        ]

        const [novaMontanharussa, setnovaMontanharussa] = useState('');

        const [montanharussa, setmontanhasrussas] = useState(listaMontanhasrussas)

        const adicionarMontanharussa =() => {
           if(novaMontanharussa !== ""){
            const novoId = montanharussa.length + 1
            const novo = {
                id:novoId,
                nome: novaMontanharussa
            }
            setmontanhasrussas([...montanharussa, novo])
            setnovaMontanharussa("")
            }
        }
    
    return ( 
        <div style={{ display: "flex", justifyContent: "center"}}>
            <div style={{ backgroundColor: "gray", padding: "16px", borderRadius: "20px", boxShadow: "10px 8px 8px rgba(0, 0, 0, 0.1)", maxWidth: "400px", width: "100%", marginTop: "20px"}}>
             <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Minhas Montanhas-Russas Favoritas</h1>
                <ul style={{ maxHeight: "300px", overflowY: "auto", padding: "4px", listStyleType: "none"}}>
                    { montanharussa.map((montanhasrussas) => (
                        <li key={montanhasrussas.id} style={{ marginBottom: "10px", padding: "10px", backgroundColor: "black", color: "white", borderRadius: "5px", textAlign: "center" }}>{montanhasrussas.nome}</li>
                    ))}
                </ul>
                <input 
                    placeholder="Digite uma nova Montanha-Russa" 
                    type="text" 
                    value={novaMontanharussa} 
                    onChange={(e) => {
                        setnovaMontanharussa(e.target.value);
                    }}
                    style={{ marginBottom: "10px", width: "80%", padding: "10px", borderRadius: "5px", border: "1px solid #000000", backgroundColor: "black", color: "white"}}
                />
                <button onClick={adicionarMontanharussa} style={{ padding: "10px", borderRadius: "5px", border: "none", backgroundColor: "black", color: "white", cursor: "pointer" }}>Adicionar</button>
            </div>
        </div>
    );
}