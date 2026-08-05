import { useEffect, useState } from "react";

import Header from "./components/Header";
import Board from "./components/Board";

function App() {

    const [tarefas, setTarefas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState("");

    useEffect(() => {

        buscarTarefas();

    }, []);

    async function buscarTarefas() {

        try {

            const resposta = await fetch("http://localhost:8080/tasks");

            if (!resposta.ok) {

                throw new Error("Erro ao carregar tarefas.");

            }

            const dados = await resposta.json();

            setTarefas(dados);

        } catch {

            setErro("Não foi possível conectar ao servidor.");

        } finally {

            setLoading(false);

        }

    }

    if (loading) {

        return <h2>Carregando tarefas...</h2>;

    }

    if (erro) {

        return <h2>{erro}</h2>;

    }

    return (

        <>

            <Header />

            <Board tarefas={tarefas} />

        </>

    );

}

export default App;