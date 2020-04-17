import React from 'react'
import ReacDOM from 'react-dom'
import Ordenacao from './ordenacao'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('teste do componente de ordenacao', () => {
  it('deve renderizar o componente sem erros',() => {
    const div = document.createElement('div');
    ReacDOM.render(
      <Ordenacao
        ordenarAsc={false}
        ordenarDesc={false} />, div
    );

    ReacDOM.unmountComponentAtNode(div);
  })
})