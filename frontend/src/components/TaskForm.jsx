import { useEffect, useState } from "react";

function TaskForm({ aoSalvar, tarefaEditando }) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {

        if (tarefaEditando) {

            setTitle(tarefaEditando.title);
            setDescription(tarefaEditando.description);

        } else {

            setTitle("");
            setDescription("");

        }

    }, [tarefaEditando]);

    function enviar(e) {

        e.preventDefault();

        if (title.trim() === "") {

            alert("O título é obrigatório.");

            return;

        }

        aoSalvar({

            ...tarefaEditando,

            title,

            description,

            status: tarefaEditando?.status || "todo"

        });

    }

    return (

        <form onSubmit={enviar} className="task-form">

            <input

                type="text"

                placeholder="Título"

                value={title}

                onChange={(e) => setTitle(e.target.value)}

            />

            <textarea

                placeholder="Descrição"

                value={description}

                onChange={(e) => setDescription(e.target.value)}

            />

            <button type="submit">

                {

                    tarefaEditando

                    ?

                    "Salvar Alterações"

                    :

                    "Adicionar"

                }

            </button>

        </form>

    );

}

export default TaskForm;