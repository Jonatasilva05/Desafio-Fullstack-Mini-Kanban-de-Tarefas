### main.go 
- Esse arquivo é o que inicia o servidor e de maneira explicativa, quem quiser conversar comigo use a porta 8080

- switch - Ele verifica qual o tipo de requisição chegou (se for Get lista as tarefas, se for Post cria uma tarefa)

---

- instalado o pacote go get github.com/gorilla/mux, porque usando http.HandleFunc() funciona porem é limitado

- Gorilla Mux - é um roteador 

<br>

    Ele entende as URLs como

    /tasks/1
    /tasks/2
    /tasks/3

- go mod tidy - ele organiza as dependencias

- /tasks/{id} - o {ID} significa qualquer numero chegando todos na mesma função

- 