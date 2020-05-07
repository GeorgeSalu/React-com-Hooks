import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Nav, NavDropdown, Navbar
} from 'react-bootstrap';
import {
  faShoppingBasket, faCashRegister, faShoppingCart
} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

function Menu(props) {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="">
        Mini Ecommerce
      </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <NavDropdown
            title={
              <div style={{ display: 'inline-block' }}>
                <FontAwesomeIcon icon={faShoppingCart} />
                &nbsp;
                Carrinho
              </div>
            }
            drop="left">
              <NavDropdown.Item>
                <FontAwesomeIcon icon={faShoppingBasket} />
                &nbsp;
                <strong>Produtos</strong>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              {/** itens do carrinho */}
              <NavDropdown.Divider />
              <NavDropdown.Item href="" data-testid="total-carrinho">
                Total: R$ {/** chamar funcao de calculo de total */}
              </NavDropdown.Item>
              {/** verificar quantidade de produtos para exibir ou nao o botao */}
              <span>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  href=""
                  style={{ color: 'green' }}>
                    <FontAwesomeIcon icon={faCashRegister} />
                    &nbsp;
                    Finalizar compra
                </NavDropdown.Item>
              </span>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

Menu.propTypes = {
  produtos: PropTypes.array.isRequired,
  handleExibirProdutos: PropTypes.func.isRequired,
  handleExibirCheckut: PropTypes.func.isRequired
}

export default Menu;