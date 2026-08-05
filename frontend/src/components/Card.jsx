function Card({ tarefa }) {

    return (

        <div className="card">

            <h3>{tarefa.title}</h3>

            <p>{tarefa.description}</p>

        </div>

    );

}

export default Card;