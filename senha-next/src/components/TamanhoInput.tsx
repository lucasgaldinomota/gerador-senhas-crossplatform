import styles from '../app/page.module.css';

interface TamanhoInputProps {
    tamanho: number;
    setTamanho: (valor: number) => void;
}

export default function TamanhoInput({ tamanho, setTamanho }: TamanhoInputProps) {
    return (
        <div className={styles.rangeContainer}>
            <label className={styles.rangeLabel}>
                <span>Tamanho da Senha:</span>
                <input
                    type="number"
                    min={5}
                    max={30}
                    value={tamanho}
                    onChange={(e) => setTamanho(+e.target.value)}
                    className={styles.numberInput}
                />
            </label>
        </div>
    );
}

