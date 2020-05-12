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

  it('deve finalizar a compra com sucesso',() => {
    axiosMock.get.mockResolvedValueOnce({ data: ['São Paulo', 'São Pedro'] });
    const { findByTestId, getByTestId, getByPlaceholderText } = render(
      <Checkout
        visivel={true}
        handleExibirProdutos={() => false}
        total={'10,00'}
        produtos={{}}
        handleLimparCarrinho={() => false} />
    );
    fireEvent.change(getByTestId('txt-email'), { target: { value: 'email@test.com'} });
    fireEvent.change(getByTestId('txt-nome-completo'), { target: { value: 'Fulano de Tal'}});
    fireEvent.change(getByPlaceholderText('Selecione a data'), { target: { value: '21/07/1998'}});
    fireEvent.change(getByTestId('txt-cpf'), {target: {value: '293.462.345-98'}});
    
  })

})