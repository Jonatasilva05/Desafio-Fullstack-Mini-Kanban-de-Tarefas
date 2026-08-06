import Card from "./Card";

function Column({
    titulo,
    tarefas,
    aoEditar,
    aoExcluir,
    aoMover
}) {

    return (

        <section className="column">

            <h2>{titulo}</h2>

            {

                tarefas.map((tarefa) => (

                    <Card
    key={tarefa.id}
    tarefa={tarefa}
    aoEditar={aoEditar}
    aoExcluir={aoExcluir}
    aoMover={aoMover}
/>

                ))

            }

        </section>

    );

}

export default Column;