import React from 'react'
import ReacDOM from 'react-dom'
import Paginacao from './paginacao'
import {render, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('Teste do componente de paginacao',() => {
  it('deve renderizar o componente sem erros',() => {
    const div = document.createElement('div')
    ReacDOM.render(
      <Paginacao
        totalItems={10}
        itemsPorPagina={10}
        paginaAtual={1}
        mudarPagina={() => false} />, div);

    ReacDOM.unmountComponentAtNode(div);
  })
})
