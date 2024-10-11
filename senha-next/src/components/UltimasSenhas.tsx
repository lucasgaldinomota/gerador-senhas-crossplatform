import ExibeSenha from "./ExibeSenha";
import '../app/globals.css';

interface UltimasSenhasProps {
    senhas: string[];
}

export default function UltimasSenhas({ senhas }: UltimasSenhasProps) {
    return (
        <div>
            <h2 className="main-title">Últimas Senhas Geradas:</h2>
            <ul className="ultimas-list">
                {senhas.map((senha, index) => (
                    <li key={index}>
                        <ExibeSenha senha={senha} />
                    </li>
                ))}
            </ul>
        </div>
    );
}