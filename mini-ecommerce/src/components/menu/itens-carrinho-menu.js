import React from 'react';
import PropTypes from 'prop-types';
import {NavDropdown} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSadTear} from '@fortawesome/free-solid-svg-icons';

function ItensCarrinhoMenu(props) {

  function render() {
    // carrinho vazio
    if(props.produtos.length === 0) {
      return (
        <NavDropdown.Item href="" data-testid="itens">
          <FontAwesomeIcon icon={faSadTear} />
          &nbsp;
          Carrinho vazio....
        </NavDropdown.Item>
      );
    }
    //listagem dos produtos
  }
  
  return render();
}

ItensCarrinhoMenu.propTypes = {
  produtos: PropTypes.array.isRequired
}

export default ItensCarrinhoMenu;