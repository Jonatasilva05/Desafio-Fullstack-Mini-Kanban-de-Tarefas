import Column from "./Column";

function Board({ tarefas }) {

    return (

        <main className="board">

            <Column

                titulo="A Fazer"

                tarefas={tarefas.filter(tarefa => tarefa.status === "todo")}

            />

            <Column

                titulo="Em Progresso"

                tarefas={tarefas.filter(tarefa => tarefa.status === "doing")}

            />

            <Column

                titulo="Concluídas"

                tarefas={tarefas.filter(tarefa => tarefa.status === "done")}

            />

        </main>

    );

}

export default Board;