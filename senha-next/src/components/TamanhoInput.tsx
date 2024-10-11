import '../app/globals.css';

interface TamanhoInputProps {
    tamanho: number;
    setTamanho: (valor: number) => void;
}

export default function TamanhoInput({ tamanho, setTamanho }: TamanhoInputProps) {
    return (
        <div className="inputContainer">
            <label className={"inputLabel"}>
                Tamanho da Senha:
            </label>
            <input
                className={"inputNumber"}
                type="number"
                min={5}
                max={30}
                value={tamanho}
                onChange={(e) => setTamanho(+e.target.value)}
            />
        </div>
    );
}

