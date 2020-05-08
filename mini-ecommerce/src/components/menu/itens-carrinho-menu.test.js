import React from 'react';
import {render} from '@testing-library/react';
import ItensCarrinhoMenu from './itens-carrinho-menu';

describe('Teste do componente de itens do carrinho do menu', () => {
  it('deve renderizar o carrinho vazio',() => {
    const {getByTestId} = render(
      <ItensCarrinhoMenu produtos={[]} />
    );
    expect(getByTestId('itens')).toHaveTextContent('Carrinho vazio...')
  })
})