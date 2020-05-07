import React from 'react';
import {Nav, NavDropdown, Navbar} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingBasket, faCashRegister, faShoppingCart
} from '@fortawesome/free-solid-svg-icons';

function Menu() {
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
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Menu;