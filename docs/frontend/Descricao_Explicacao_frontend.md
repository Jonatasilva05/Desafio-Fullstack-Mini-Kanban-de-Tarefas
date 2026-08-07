#### Separação de cada arquivo
- App.jsx - Onde é exibido a aplicação, é o chefe

        Ele controla
        - lista de tarefas
        - loading
        - erro
        Ele busca dados.
        Ele salva, exclui, edita, e exibe
        Ele envia informações para os outros componentes.

- Header.jsx - Apenas mostra o titulo da aplicação

- TaskForm - É o formulário, ele cria as tarefas
        
        OBS: porem quando clica no botao adicionar ele nao salva apenas avisa que o usuario quer criar uma tarefa

- Board.jsx - É o quadro inteiro, ele quem organiza as colunas

- Column.jsx - É cada coluna da lista: A fazer, Em progresso, Concluído

- Card.jsx - É uma tarefa 

<br>

        components
        |->Header.jsx - Apenas mostra o titulo da aplicação
        |->Board.jsx - 
        |->Column.jsx - recebe titulo que é uma lista e usa o map() para desenhar um cartão para cada tarefa
        |->Card.jsx - recebe a propriedade chamada tarefa e envia pelo componente Colunm

<br>

---

- State - ao imaginar um quadro branco 

<br>

    □ Estudar React

    □ Aprender Go

quando escrevemos outra tarefa

    □ Estudar React

    □ Aprender Go

    □ Fazer exercício

o quadro muda, em React isso tem um nome, chama Estado

---

- fetch("http://localhost:8080/tasks") - o fetch pode ser associado a um carteiro ou garçom ele vai até o back pega os dados e tras de volta

- useEffect() - para explicação breve associe a um interruptor quando voce entra no quarto a luz acende, no react em vez de ligar a luz ele vai executar um codigo quando abrir a pagina

- 