import React, { useState } from 'react'
import { Button, Form, Jumbotron, Modal } from 'react-bootstrap'
import { navigate, A } from 'hookrouter'

function CadastrarTarefa() {
	return (
		<div>
      <h3 className="text-center">Cadastrar</h3>
      <Jumbotron>
        <Form>
          <Form.Group>
            <Form.Label>Tarefa</Form.Label>
            <Form.Control 
              type="text"
              placeholder="Digite a tarefa"
              minLength="5"
              maxLength="100"
              required />

            <Form.Control.Feedback type="invalid">
              A Tarefa deve conter ao menos 5 caracteres
            </Form.Control.Feedback> 
          </Form.Group>
        </Form>
      </Jumbotron>  
    </div>
	)
}

export default CadastrarTarefa