function Card({
    tarefa,
    aoEditar,
    aoExcluir,
    aoMover
}) {

    return (

        <div className="card">

            <h3>{tarefa.title}</h3>

            <p>{tarefa.description}</p>

            <select
                value={tarefa.status}
                onChange={(e) => aoMover(tarefa, e.target.value)}
            >

                <option value="todo">
                    A Fazer
                </option>

                <option value="doing">
                    Em Progresso
                </option>

                <option value="done">
                    Concluídas
                </option>

            </select>

            <div className="card-buttons">

                <button onClick={() => aoEditar(tarefa)}>
                    Editar
                </button>

                <button onClick={() => aoExcluir(tarefa.id)}>
                    Excluir
                </button>

            </div>

        </div>

    );

}

export default Card;