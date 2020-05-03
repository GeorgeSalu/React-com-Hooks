const cidadesEstados = require('../cidades-estados.json');

function finalizarCompra(req, res) {
  console.log(req.body);
  res.send('ok')
}

function obterCidadesPorEstado(req, res) {
  const siglaEstado = req.params['siglaEstado'].toUpperCase();
  const dadosEstado = cidadesEstados.estados.filter(estado => estado.sigla === sigla.estado);
  if(dadosEstado.length === 0) {
    res.status(404).json({ erro: `${siglaEstado} não é um estaod valido` })
  }
  res.json(dadosEstado[0].cidades)
}

module.exports = {
  finalizarCompra,
  obterCidadesPorEstado
}