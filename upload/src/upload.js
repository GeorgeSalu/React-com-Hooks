import React, { useState } from 'react';
import './upload.css';
import {Button, Form, Jumbotron, Image, Modal, Spinner} from 'react-bootstrap'
import axios from 'axios'

function Upload() {

  const [imagem, setImagem] = useState();
  const [desabilitarBotao, setDesabilitarBotao] = useState(true);
  const [urlImagem, setUrlImagem] = useState('');
  const [exibirImage,setExibirImage ] = useState(false);
  const [exibirModal, setExibirModal] = useState(false);
  const [exibirProcessando, setExibirProcessando] = useState(false);

  function handleUpload(event) {

  }

  

  return (
    <div>
      <h3 className="text-center">Upload de imagens</h3>
      <Jumbotron>
        <Form onSubmit={handleUpload} noValidate>
          <Form.Group>
            <Form.Label>Selecione a imagem (PNG ou JPEG)</Form.Label>
            <Form.Control
              type="file"
              accept="image/png, imagem/jpeg" 
              onChange={handleImagem} />
          </Form.Group>
          <Form.Group className="text-center">
            <Button
              variant="success"
              type="submit">
                <span>Fazer upload</span>
            </Button>
          </Form.Group>
          <Form.Group>
            <Spinner animation="border" />
          </Form.Group>
        </Form>
        <div>
          <hr />
          <a href="" target="_blank">
            <Image 
              src={""}
              thumbnail />
            <br />
            {/** url da imagem em formato texto */}
          </a>
        </div>
      </Jumbotron>
      <Modal show={false} >
        <Modal.Header closeButton>
          <Modal.Title>Erro ao fazer o upload da imagem</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Não foi possivel fazer o upload da imagem, tente novamente em instantes
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="warning">
              Fechar 
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Upload;
