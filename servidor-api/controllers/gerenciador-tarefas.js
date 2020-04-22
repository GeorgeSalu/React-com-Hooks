const uuidv4 = require('uuid/v4');

let tarefas = [
  {id: '1', nome: 'aprender react', concluida: true},
  {id: '2', nome: 'aprender javascript', concluida: false},
  {id: '3', nome: 'aprender java', concluida: false},
  {id: '4', nome: 'aprender react native', concluida: false},
]

function listarTarefaId(req, res) {
  const id = req.params.id;
  const tarefa = tarefas.filter(tarefa => tarefa.id === id);
  if(tarefa.length === 0) {
    res.status(404).json({ erro: 'Tarefa nao encontrada' });
  }
  res.status(200).json(tarefa[0]);
}

module.exports = {
  listarTarefaId
}