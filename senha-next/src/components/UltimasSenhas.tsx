import ExibeSenha from "./ExibeSenha";

interface UltimasSenhasProps {
    senhas: string[];
}

export default function UltimasSenhas({ senhas }: UltimasSenhasProps) {
    return (
        <div className="mt-3">
            <h2 className="font-bold text-lg">Últimas Senhas Geradas:</h2>
            <ul className="ultimasSenhas">
                {senhas.map((senha, index) => (
                    <li key={index}>
                        <ExibeSenha senha={senha} />
                    </li>
                ))}
            </ul>
        </div>
    );
}