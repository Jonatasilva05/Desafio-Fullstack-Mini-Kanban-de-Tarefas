### App.jsx

- App() - representa toda a aplicação

- import Header from "./components/Header" - vá até a pasta components e traga o componente header

- <Header/> - Desenhe o componente na tela

- import { useState } from "react"; - faz o React importar a ferramenta useState e diz quero usa-la

- const [contador, setContador] = useState(0); - contador é a variavel que começa com 0, ja p setContador é a função que faz a alteração do valor

- <button onClick={() => setContador(contador + 1)}> - quando clicar ele pega o contador soma + 1 e atualiza na tela

- map - ele passa por cada item fazendo alguma, no caso do teste ele esta mostrando um <p>

- key={tarefa.id} - cada item precisa de uma identificação unica, neste caso usamos ID que é uma exigencia do React para identificar corretamente os elementos da lista

- const [tarefas, setTarefas] = useState([]); - começa com a lista vazia depois que o back responde ela é preenchida

- const [loading, setLoading] = useState(true); - quando a pagina abre loading = true sera exibido "Carregando Tarefas" depois que a API responder loading = false o React mostra o Kanban 

- const [erro, setErro] = useState(""); - se o servidor estiver desligado retorna "nao foi possivel conectar ao servidor" é muito bom para o usuario e ate o desenvolvedor, feedback é essencial

- useEffect(() => {

    buscarTarefas();

}, []);

- O [] - significa execute apenas uma vez quando o app abrir

- const resposta = await fetch() - await - espera a resposta chegar 

- const dados = await resposta.json(); é devolvido pelo backend como 
[
   {
      "id":1,
      "title":"Estudar React"
   }
]
essa linha entao tranforma o JSON em um objeto JavaScript

- setTarefas(dados); - atualiza o estado e quando acontece isso o React desenha automaticamente as colunas

- 