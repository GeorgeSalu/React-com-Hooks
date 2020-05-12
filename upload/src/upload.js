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
              accept="image/png, imagem/jpeg">
                
              </Form.Control>
          </Form.Group>
        </Form>
      </Jumbotron>
    </div>
  );
}

export default Upload;
