import React, { useState } from 'react';
import './upload.css';
import {Button, Form, Jumbotron, Image, Modal, Spinner} from 'react-bootstrap'
import axios from 'axios'

function Upload() {
  return (
    <div>
      <h3 className="text-center">Upload de imagens</h3>
      <Jumbotron>
        <Form noValidate>
          <Form.Group>
            <Form.Label>Selecione a imagem (PNG ou JPEG)</Form.Label>
            <Form.Control
              type="file"
              accept="image/png, imagem/jpeg"/>
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
      </Jumbotron>
    </div>
  );
}

export default Upload;
