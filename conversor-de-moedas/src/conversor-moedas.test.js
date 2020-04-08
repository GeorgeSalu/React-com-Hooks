import React from 'react';
import ReactDOM from 'react-dom';
import ConversorMoedas from './conversor-moedas';
import {render, fireEvent} from '@testing-library/react'
import axiosMock from 'axios';

describe('Teste do componente de conversao de moedas', => {

	it('deve retornar o componente sem erros', () => {
	  const div = document.createElement('div');
	  ReactDOM.render(<ConversorMoedas />, div);
	  ReactDOM.unmountComponentAtNode(div);
	})

  it('deve simular uma conversao de moedas', => {
    const { findByTestId, getByTestId } = render(<ConversorMoedas />);
    axiosMock.get.mockResolvedValueOnce({
      data: {success: true, rates: {BRL: 4.564292, USD: 1.101049}}
    });
  })

})

