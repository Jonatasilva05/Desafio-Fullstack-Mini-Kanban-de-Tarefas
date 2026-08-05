#### Separação de cada arquivo
- App.jsx - Onde é exibido a aplicação

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