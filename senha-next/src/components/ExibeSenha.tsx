import { IconCopy } from "@tabler/icons-react";
import { useState } from "react";
import '../app/globals.css';

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
        <div>
            {props.senha.trim() !== "" && (
                <div className={"senhaContainer"}>
                    {props.senha}
                    <IconCopy className={"copiarIcone"} onClick={copiar} />
                </div>
            )}

            {mostrarAviso && (
                <p className={"copiadoAviso"}>Senha copiada para área de transferência!</p>
            )}
        </div>
    );
}