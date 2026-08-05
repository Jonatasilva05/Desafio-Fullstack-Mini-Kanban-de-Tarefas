### handlers.go
- /tasks - quando alguem tenta acessar o Go responde em JSON

- json.NewEncoder(w).Encode(tasks) - esta dizendo transforme as tarefas em JSON

- var task Task - é uma variavel vazia

- json.NewDecoder() - Pega o JSON enviado pelo React e transforma em uma variavel Go

- if task.Title == "" - Aqui é feita a validação, ou seja exigimos um titulo obrigatório

- task.ID = len(tasks)+1 - Nesse caso como não esta sendo ultilizado banco de dados então usa uma ID simples, se tiver 1 2 3 o proximo sera 4

- append(tarefa) - Adicona a tarefa ao final da lista

- params := mux.Vars(r) - Pega o numero da URL (ex /tasks/2) e devolve id = 2

- for - percorre todas as tarefas e quando encontra o ID correto troca pela nova tarefa

<br>

---

- tasks = append(tasks[:i], tasks[i+1:]) - para explicar imagine uma lista

<br>

    1
    2
    3
    4

então resolvemos tirar o 2 então fazemos 

    Antes dele

    +

    Depois dele

resultando em

    1
    3
    4

é isso que a linha faz

---

