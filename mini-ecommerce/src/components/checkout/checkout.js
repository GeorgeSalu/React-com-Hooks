import React, {useState} from 'react'
import {Form, Row, Col, Button, Jumbotron, Modal} from 'react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker, {registerLocale} from 'react-datepicker';
import pt from 'date-fns/locale/pt';
import PropTypes from 'prop-types';
import ListarEstados from './listar-estados';
import ListarCidades from './listar-cidades';
import { Formik } from 'formik';

registerLocale('pt', pt);

function Checkout(props) {

  const [dataNascimento, setDataNascimento] = useState(null);
  const [formEnviado, setFormEnviado] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showErroModal, setShowErroModal] = useState(false);

  function visivel() {
    return props.visivel ? null : 'hidden';
  }

  return (
    <Jumbotron
      fluid
      style={{ margin: '10px' }}
      className={visivel()}>
        <h3 className="text-center">Finalizar compra</h3>

        <Formik>

          <Form noValidate style={{ margin: '10px' }}>
            <Form.Group as={Row} controlId="email">
              <Form.Label column sm={3}>
                Email
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="email"
                  placeholder="Digite o seu email"
                  name="email"
                  data-testid="text-email"/>
                <Form.Control.Feedback type="invalid">
                  Digite um email valido
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="nomeCompleto">
              <Form.Label column sm={3}>
                Nome completo
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  placeholder="Digite o seu nome completo"
                  name="nomeCompleto"
                  data-testid="txt-nome-completo" />
                <Form.Control.Feedback type="invalid">
                  Digite o seu nome completo (minimo 5 caracteres)
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="dataNascimento">
                <Form.Label column sm={3}>
                  Data de nascimento
                </Form.Label>
                <Col sm={9}>
                  <DatePicker
                    locale="pt"
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Selecione a data"
                    withPortal />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="cpf">
              <Form.Label column sm={3}>
                CPF
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  placeholder="Digite o seu cpf"
                  name="cpf"
                  data-testid="txt-cpf" />
                <Form.Control.Feedback type="invalid">
                  Digite um CPF valido
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="endereco">
              <Form.Label column sm={3}>
                Endereco
              </Form.Label>
              <Col sm={9}>
                <Form.Control 
                  type="text"
                  placeholder="digite o seu endereco completo"
                  name="endereco"
                  data-testid="txt-endereco" />
                <Form.Control.Feedback type="invalid">
                  Digite o seu endereco.
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="estado">
              <Form.Label column sm={3}>
                Estado
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  as="select"
                  name="estado"
                  data-testid="estado">
                    <ListarEstados />
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  Selecione o seu estado
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="cidade">
              <Form.Label column sm={3}>
                Cidade
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  as="select"
                  name="cidade"
                  data-testid="cidade">
                    <option value="">Selecion a cidade</option>
                    <ListarCidades estado={''} />
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  Selecione a sua cidade
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="cep">
              <Form.Label column sm={3}>
                CEP
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  placeholder="Digite o seu CEP"
                  name="cep"
                  data-testid="txt-cep" />

                <Form.Control.Feedback type="invalid">
                  Digite o seu cep
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="emailPromocional">
              <Form.Label column sm={12}>
                Deseja receber emails com promoções ?
              </Form.Label>
              <Form.Check
                inline
                name="emailPromocional"
                type="radio"
                id="promocaoSim"
                value="S"
                label="Sim"
                style={{ marginLeft: '15px' }} />

              <Form.Check
                inline
                name="emailPromocional"
                id="promocaoNao"
                value="N"
                type="radio"
                label="Não" />
            </Form.Group>

            <Form.Group as={Row} controlId="termosCondicoes">
              <Form.Check 
                name="termosCondicoes"
                label="Concordo com os termos e condições"
                style={{ marginLeft: '15px' }}
                data-testid="check-termos-condicoes" />

            </Form.Group>

            <Form.Group as={Row} controlId="finalizarCompra">
              <Col className="text-center" sm={12}>
                <Button
                  type="submit"
                  variant="success"
                  data-testid="btn-finalizar-compra">
                    Finalizar compra
                </Button>
              </Col>
            </Form.Group>
          </Form>

        </Formik>

        <Modal show={false} data-testid="modal-compra-sucesso">
          <Modal.Header closeButton>
            <Modal.Title>Compra realizada com sucesso</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Um email de comfirmação foi enviado com os detalhes da transação.
          </Modal.Body>
          <Modal.Footer>
            <Button 
              variant="success">
                Continuar
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={false} data-testid="modal-erro-comprar">
          <Modal.Header closeButton>
            <Modal.Title>Error ao processar pedido</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Tente novamente em instantes.
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="warning">
                Continuar
            </Button>
          </Modal.Footer>
        </Modal>

    </Jumbotron>
  );

}

Checkout.propTypes = {
  visivel: PropTypes.bool.isRequired,
  handleExibirProdutos: PropTypes.func.isRequired,
  total: PropTypes.string.isRequired,
  produtos: PropTypes.object.isRequired,
  handleLimparCarrinho: PropTypes.func.isRequired
}

export default Checkout;