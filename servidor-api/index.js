const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { listarTarefaId, listarTarefas, cadastrarTarefa } = require('./controllers/gerenciador-tarefas.js');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

function naoImplementado(req,res) {
  res.status(501).json({ erro: 'Nao implementado' });
}

//listar todas tarefas - get
app.get('/gerenciador-tarefas', listarTarefas);

//listar uma tarefa por id
app.get('/gerenciador-tarefas/:id', listarTarefaId);

//cadastrar um tarefa - post
app.post('/gerenciador-tarefas', cadastrarTarefa);

//atualizar uma tarefa - put
app.put('/gerenciador-tarefas/:id', naoImplementado);

//remover uma tarefa - delete
app.delete('/gerenciador-tarefas/:id', naoImplementado);

//concluir uma tarefa - put
app.put('/gerenciador-tarefas/:id/concluir', naoImplementado);


app.listen(port, () => console.log(`servidor inicializado na porta ${port}`));