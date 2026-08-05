import Card from "./Card";

function Column({ titulo, tarefas }) {

    return (

        <section className="column">

            <h2>{titulo}</h2>

            {

                tarefas.map((tarefa) => (

                    <Card

                        key={tarefa.id}

                        tarefa={tarefa}

                    />

                ))

            }

        </section>

    );

}

export default Column;