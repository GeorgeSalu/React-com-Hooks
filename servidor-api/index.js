const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

//listar todas tarefas - get
app.get('/gerenciador-tarefas', (req, res) => {
  res.status(501).json({ erro: 'Nao implementado' })
});

app.listen(port, () => console.log(`servidor inicializado na porta ${port}`));