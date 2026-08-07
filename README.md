# Kanban Board

Projeto desenvolvido como desafio técnico utilizando Go e React.

---

## Tecnologias

### Backend

- Go
- Gorilla Mux
- API REST

### Frontend

- React
- Vite
- JavaScript

---

## Arquitetura

O projeto utiliza uma arquitetura em camadas (Layered Architecture), dividindo as responsabilidades entre frontend e backend.

### Backend

- main.go
- handlers.go
- models.go

### Frontend

- App.jsx
- Components
    - Header
    - Board
    - Column
    - Card
    - TaskForm

---

## Estrutura

backend/

```
main.go
handlers.go
models.go
```

frontend/

```
src/
components/
App.jsx
main.jsx
```

---

## Funcionalidades

✔ Criar tarefa

![Status Em progresso Tarefa](./assets/a_fazer.gif)

✔ Editar tarefa

![Editar Tarefa](./assets/Editar.gif)

✔ Excluir tarefa

![Editar Tarefa](./assets/Excluir.gif)

✔ Alterar status

- A Fazer
![Status Em progresso Tarefa](./assets/a_fazer.gif)

- Em progresso
![Status Em progresso Tarefa](./assets/em_progresso.gif)

- Concluída
![Status Em progresso Tarefa](./assets/concluidaas.gif)

✔ Listar tarefas

![Status Em progresso Tarefa](./assets/listar.gif)

✔ Separação em três colunas

![Status Em progresso Tarefa](./assets/colunas.png)

- A Fazer
- Em Progresso
- Concluídas

---

## Fluxo da aplicação

Usuário

↓

React

↓

API REST

↓

Go

↓

Memória

↓

Resposta JSON

↓

React atualiza a interface

---

## Rotas da API

GET /tasks

Lista todas as tarefas.

---

POST /tasks

Cria uma nova tarefa.

---

PUT /tasks/{id}

Atualiza uma tarefa existente.

---

DELETE /tasks/{id}

Remove uma tarefa.

---

## Modelo da Task

```json
{
    "id": 1,
    "title": "Estudar React",
    "description": "Hooks",
    "status": "todo"
}
```

Status possíveis:

- todo
- doing
- done

---

## Como executar

### Backend

```bash
go run main.go
```

Servidor disponível em:

```
http://localhost:8080
```

---

### Frontend

```bash
npm install

npm run dev
```

Aplicação disponível em:

```
http://localhost:5173
```

---

## Melhorias futuras

- Persistência em banco de dados
- Drag and Drop
- Autenticação
- Responsividade
- Testes automatizados

---

## Autor

Jônatas Silva

GitHub:
https://github.com/Jonatasilva05

LinkedIn:
https://www.linkedin.com/in/jônatas-silva-714a9a216/

<br>

![React](https://img.shields.io/badge/React-19-blue)

![Go](https://img.shields.io/badge/Go-1.24-cyan)

![REST API](https://img.shields.io/badge/API-REST-green)

![Status](https://img.shields.io/badge/Status-Concluído-success)