const cidadesEstados = require('../cidades-estados.json');

function finalizarCompra(req, res) {
  console.log(req.body);
  res.send('ok')
}

function obterCidadesPorEstado(req, res) {
  const siglaEstado = req.params['siglaEstado'].toUpperCase();
  const dadosEstado = cidadesEstados.estados.filter(estado => estado.sigla === sigla.estado);
}

module.exports = {
  finalizarCompra
}