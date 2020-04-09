import React, { useState } from 'react'
import { Button, Form, Jumbotron, Modal } from 'react-bootstrap'
import { navigate, A } from 'hookrouter'

function CadastrarTarefa() {

  const [tarefa, setTarefa] = useState('');
  const [formValidado, setFormValidado] = useState(false);
  const [exibirModal, setExibirModal] = useState(false);

  function cadastrar(event) {

  }

  function handleTxtTarefa(event) {
    setTarefa(event.target.value)
  }

	return (
		<div>
      <h3 className="text-center">Cadastrar</h3>
      <Jumbotron>
        <Form 
          validated={formValidado}
          noValidate
          onSubmit={cadastrar}>
          <Form.Group>
            <Form.Label>Tarefa</Form.Label>
            <Form.Control 
              type="text"
              placeholder="Digite a tarefa"
              minLength="5"
              maxLength="100"
              required
              value={tarefa}
              onChange={handleTxtTarefa} />

            <Form.Control.Feedback type="invalid">
              A Tarefa deve conter ao menos 5 caracteres
            </Form.Control.Feedback> 
          </Form.Group>
          <Form.Group className="text-center">
            <Button
              variant="success"
              type="submit">
              Cadastrar
            </Button>
            &nbsp;
            <A href="/"
              className="btn btn-light">
              Voltar
            </A>
          </Form.Group>
        </Form>
        <Modal show={false}>
          <Modal.Header closeButton>
            <Modal.Title>Sucesso</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Tarefa adicionada com sucesso
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="success">
              Continuar
            </Button>
          </Modal.Footer>
        </Modal>
      </Jumbotron>  
    </div>
	)
}

export default CadastrarTarefa