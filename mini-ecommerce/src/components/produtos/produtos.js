import React, { useState } from 'react';
import ListarProdutos from './listar-produtos';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap';

function Produtos(props) {

  const [exibirMsg, setExibirMsg] = useState(false);
  const [produto, setProduto] = useState('');

  function visivel() {
    return props.visivel ? null : 'hidden';
  }

  function exibirMensagem(produto) {
    setExibirMsg(true);
    setProduto(produto);
  }

  return (
    <div className={visivel()}>
      <ListarProdutos />
    </div>
  );
}

Produtos.propTypes = {
  visivel: PropTypes.bool.isRequired,
  adicionarProduto: PropTypes.func.isRequired
}

export default Produtos;