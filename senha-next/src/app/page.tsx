"use client";
import { useState } from "react";
import opcoes from "../../../core/OpcoesCaracteres";
import Checkbox from "@/components/Checkbox";
import Senha from "../../../core/Senha";
import UltimasSenhas from "@/components/UltimasSenhas";
import TamanhoInput from "@/components/TamanhoInput";
import './globals.css';

export default function Home() {
    const [tamanho, setTamanho] = useState<number>(8);
    const [tiposCaracteres, setTiposCaracteres] = useState(opcoes);
    const [senha, setSenha] = useState("");
    const [senhasGeradas, setSenhasGeradas] = useState<string[]>([]);

    const lidaComMudanca = (indice: number) => {
        const aux = [...tiposCaracteres];
        aux[indice].valor = !aux[indice].valor;
        setTiposCaracteres([...aux]);
    };

    const gerarSenha = () => {
        const novaSenha = Senha.gerarSenha(tamanho, tiposCaracteres);
        setSenha(novaSenha);
        setSenhasGeradas((prev) => [novaSenha, ...prev.slice(0, 7)]);
    };

    return (
        <main className={"main"}>
            <div className={"main-container"}>
                <h1 className={"main-title"}>Gerador de Senhas</h1>
                <TamanhoInput tamanho={tamanho} setTamanho={setTamanho} />
                <div className={"checkbox-container"}>
                    {tiposCaracteres.map((opcao, i) => (
                        <Checkbox
                            key={opcao.id}
                            id={opcao.id}
                            texto={opcao.nome}
                            selecionado={opcao.valor}
                            lidaComMudanca={() => lidaComMudanca(i)}
                        />
                    ))}
                </div>
                <button className={"main-button"} onClick={gerarSenha}>
                    Gerar Senha
                </button>
            </div>
            <div className={"main-container"}>
                <UltimasSenhas senhas={senhasGeradas} />
            </div>
        </main>
    );
}