import '../app/globals.css';

interface TamanhoInputProps {
    tamanho: number;
    setTamanho: (valor: number) => void;
}

export default function TamanhoInput({ tamanho, setTamanho }: TamanhoInputProps) {
    return (
        <div>
            <label className={"inputLabel"}>
                <span>Tamanho da Senha:</span>
                <input
                    type="number"
                    min={5}
                    max={30}
                    value={tamanho}
                    onChange={(e) => setTamanho(+e.target.value)}
                    className={"inputNumber"}
                />
            </label>
        </div>
    );
}

