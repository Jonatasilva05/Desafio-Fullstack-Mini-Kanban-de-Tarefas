import Column from "./Column";

function Board({
    tarefas,
    aoEditar,
    aoExcluir,
    aoMover
}) {

    return (

        <main className="board">

            <Column
                titulo="A Fazer"
                tarefas={tarefas.filter(t => t.status === "todo")}
                aoEditar={aoEditar}
                aoExcluir={aoExcluir}
                aoMover={aoMover}
            />

            <Column
                titulo="Em Progresso"
                tarefas={tarefas.filter(t => t.status === "doing")}
                aoEditar={aoEditar}
                aoExcluir={aoExcluir}
                aoMover={aoMover}
            />

            <Column
                titulo="Concluídas"
                tarefas={tarefas.filter(t => t.status === "done")}
                aoEditar={aoEditar}
                aoExcluir={aoExcluir}
                aoMover={aoMover}
            />

        </main>

    );

}

export default Board;