import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Checkout from './checkout';
import axiosMock from 'axios'

describe('Teste do componente checkout',() => {

  const dadosFinalizarCompra = {
    email: 'email@tes.com',
    nomeCompleto: 'Fulano de tal',
    cpf: '293.462.345-98',
    endereco: 'rua dos cadastros, 389',
    cidade: 'São Paulo',
    estado: 'SP',
    cep: '12345-678',
    termosCondicoes: true,
    emailPromocional: 'S',
    dataNascimento: new Date('1998-07-20T23:00:00.000Z'),
    produtos: '{}',
    total: 'R$ 10,00'
  }  

})