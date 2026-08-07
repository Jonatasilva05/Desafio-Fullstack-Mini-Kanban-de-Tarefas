### models.go
- Ele define como é uma tarefa 

        Toda tarefa precisa de 
        ID
        Titulo
        Descrição
        Status

        Então o Go cria +/- assim

        type Task struct {
            ID
            Title
            Description
            Status
        }

- type Task struct - estamos a dizer "Existe um tipo chamado Task", é como se tivéssemos criando uma ficha de cadastro

e cada tarefa possui ID, Titulo, Descrição, Status

- var tasks - essa variavel guarda varias tarefas, e até então no momento esta funcionando como bando de dados de memoria