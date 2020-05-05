import React from 'react';
import ListarProdutos from './listar-produtos';
import PropTypes from 'prop-types';

function Produtos() {
  return (
    <ListarProdutos />
  );
}

Produtos.propTypes = {
  visivel: PropTypes.bool.isRequired,
  adicionarProduto: PropTypes.func.isRequired
}

export default Produtos;