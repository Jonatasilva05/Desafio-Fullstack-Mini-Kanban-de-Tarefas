import { useEffect, useState } from "react";

import Header from "./components/Header";
import Board from "./components/Board";
import TaskForm from "./components/TaskForm";

function App() {

    const [tarefas, setTarefas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState("");
    const [tarefaEditando, setTarefaEditando] = useState(null);

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

async function salvarTarefa(tarefa) {

    const editando = tarefa.id !== undefined;

    const url = editando
        ? `http://localhost:8080/tasks/${tarefa.id}`
        : "http://localhost:8080/tasks";

    const metodo = editando ? "PUT" : "POST";

    try {

        const resposta = await fetch(url, {

            method: metodo,

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(tarefa)

        });

        if (!resposta.ok) {

            throw new Error();

        }

        buscarTarefas();

        setTarefaEditando(null);

    } catch {

        setErro("Erro ao salvar tarefa.");

    }

}

async function excluirTarefa(id) {

    const confirmar = window.confirm(
        "Deseja realmente excluir esta tarefa?"
    );

    if (!confirmar) return;

    try {

        const resposta = await fetch(

            `http://localhost:8080/tasks/${id}`,

            {

                method: "DELETE"

            }

        );

        if (!resposta.ok) {

            throw new Error();

        }

        buscarTarefas();

    } catch {

        setErro("Erro ao excluir tarefa.");

    }

}

async function moverTarefa(tarefa, novoStatus) {

    try {

        const resposta = await fetch(

            `http://localhost:8080/tasks/${tarefa.id}`,

            {

                method: "PUT",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify({

                    ...tarefa,

                    status: novoStatus

                })

            }

        );

        if (!resposta.ok) {

            throw new Error();

        }

        buscarTarefas();

    } catch {

        setErro("Erro ao mover tarefa.");

    }

}

useEffect(() => {
    buscarTarefas();
}, []);

    if (loading) {

        return <h2>Carregando tarefas...</h2>;

    }

    if (erro) {

        return <h2>{erro}</h2>;

    }

    return (

        <>

            <Header />

            <TaskForm

    aoSalvar={salvarTarefa}

    tarefaEditando={tarefaEditando}

/>

            <Board
    tarefas={tarefas}
    aoEditar={setTarefaEditando}
    aoExcluir={excluirTarefa}
    aoMover={moverTarefa}
/>

        </>

    );

}

export default App;