import React from 'react'
import Pagination from 'react-bootstrap/Pagination'
import PropTypes from 'prop-types'

function Paginacao(props) {

  function gerarPrimeiroItem() {
    return (
      <Pagination.First
        key="pagFirst"
        onClick={() => props.mudarPagina(1)}
        disabled={props.paginaAtual === 1} />
    )
  }
  
  function gerarItemAnterior() {
    return (
      <Pagination.Prev
        key="pagPrev"
        onClick={() => props.mudarPagina(props.paginaAtual - 1 )}
        disabled={props.paginaAtual === 1} />
    )
  }

  function obterPaginacao() {
    const numPaginas = Math.ceil(props.totalItems / props.itemsPorPagina);
    let items = [];

    items.push(gerarPrimeiroItem())
    items.push(gerarItemAnterior())

    for(let pagina = 1; pagina <= numPaginas; pagina++) {
      items.push(gerarItemNumerico(pagina))
    }

    return items;
  }

  return(
    <Pagination data-testid="paginacao">
      {obterPaginacao()}
    </Pagination>
  );
}

Paginacao.propTypes = {
  totalItems: PropTypes.number.isRequired,
  itemsPorPagina: PropTypes.number.isRequired,
  paginaAtual: PropTypes.number.isRequired,
  mudarPagina: PropTypes.func.isRequired
}

export default Paginacao