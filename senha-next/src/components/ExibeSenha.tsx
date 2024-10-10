import { IconCopy } from "@tabler/icons-react";
import { useState } from "react";
import styles from '../app/page.module.css';

interface ExibeSenhaProps {
    senha: string;
}

export default function (props: ExibeSenhaProps) {
    const [mostrarAviso, setMostrarAviso] = useState(false);

    const copiar = () => {
        navigator.clipboard.writeText(props.senha);
        setMostrarAviso(true);
        setTimeout(() => {
            setMostrarAviso(false);
        }, 2000);
    };

    return (
        <div className={styles.senhaContainer}>
            {props.senha.trim() !== "" && (
                <>
                    <div className={styles.senhaBox}>
                        {props.senha}
                        <IconCopy className={styles.copiarIcone} onClick={copiar} />
                    </div>
                </>
            )}

            {mostrarAviso && (
                <p className={styles.copiadoAviso}>Senha copiada para área de transferência!</p>
            )}
        </div>
    );
}