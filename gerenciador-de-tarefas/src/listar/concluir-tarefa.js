import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {Modal, Button} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';

function ConcluirTarefa(props) {

  const [exibirModal, setExibirModal] = useState(false);


  function handleAbrirModal(event) {
    event.preventDefault();
    setExibirModal(true);
  }

  function handleFecharModal() {
    setExibirModal(false);
  }

  return (
    <span className={props.className}>
      <Button className="btn-sm" onClick={handleAbrirModal}
        data-testid="btn-abrir-modal">
        <FontAwesomeIcon icon={faClipboardCheck} />
      </Button>
      <Modal show={exibirModal} onHide={handleFecharModal}
        data-testid="modal">
        <Modal.Header closeButton>
          <Modal.Title>Concluir tarefa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Deseja realmente concluir a seguinte tarefa ?
          <br />
          <strong>{props.tafera.nome}</strong>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleConcluirTarefa}
            data-testid="btn-concluir" >
            Sim
          </Button>
          <Button variant="light" onClick={handleFecharModal} 
            data-testid="btn-fechar-modal">
            Não
          </Button>
        </Modal.Footer>
      </Modal>
    </span>
  );
}

ConcluirTarefa.propTypes = {
  tarefa: PropTypes.object.isRequired,
  recarregarTarefas: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired
}

export default ConcluirTarefa