<br>

---

<br>


``` bash

Bibliotecas

"net/http" - Serve para Criar Sites e APIs
"github.com/gorilla/mux" - Serve como Roteador

```

<br>

## Primeira Parte

- package(nome do pacote) - é para informar o pacote principal

- import (biblioteca) - é para importar qual biblioteca será ultilizada

- func (função) - é a função principal quando o programa inicia é ela quem é executada 

- fmt.Println(imprimir na tela) - é usado para retornar uma mensagem no terminal

- func home(w http.ResponseWriter, r *http.Request) - de maneira breve, ela "significa" quando alguem acessar o endereço /, execute esse codigo.

- http.HandleFunc("/", home) - como dito anteriormente quando acessarem / execute o home()

- fmt.Fprintln(w, "Servidor do Kanban funcionando!") - a mudança é que antes escreviamos para o terminal e agora ele escreve para o navegador 

- http.ListenAndServe(":8080", nil) - bem breve significa fique de ouvido na porta 8080

- GET - significa me de alguma informação ex(GET /tasks - Me envie/pegue todas as tarefas )

- POST - significa criar

- PUT - significa editar

- DELETE - significa excluir

- 

<br>

## Segunda Parte

- type Task struct - Ela representa uma tarefa possuindo um ID, Titulo e Status

- var tasks - Representa a lista de tarefa que atualmente fica tudo na memoria

- getTasks() - Ela pega a lista e transforma em JSON

- JSON (É um formato de texto usado para trocar informações entre sistemas)

<br>

## Terceira Parte

#### Separação de cada arquivo
- main.go - é quem inicia o servidor
- models.go - é quem guarda os modelos(moldes, ex(tasks))
- handlers.go - é quem guarda as funções (ex GET, POST, DELETE)
- cors.go - É o segurança o navegador diz "um momento...Endereços diferentes, posso deixar um conversar com o outro? (por segurança ele bloqueia) " então o cors diz "sim, pode", Sem o cors o React não conversa com o Backend afinal são portas diferente

<br>

    React - localhost:5173
    Go - localhost:8080

<br>

---

<br>

### // OBSERVAÇÃO //
    Antes era executado com go run main.go, porque existia apenas 1 arquivo 
    Mas agora sera go run. para executar todos dentro da pasta

<br>

---

