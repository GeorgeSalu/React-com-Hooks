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

  it('deve exibir a ordenacao padrao',() => {
    const {getByTestId} = render(
      <Ordenacao ordenarAsc={false} ordenarDesc={false} />
    );
    expect(getByTestId('faSort')).not.toHaveClass('hidden');
    expect(getByTestId('faSortUp')).toHaveClass('hidden');
    expect(getByTestId('faSortDown')).toHaveClass('hidden');
  })

  it('deve exibir a ordenacao ascendente',() => {
    const {getByTestId} = render(
      <Ordenacao ordenarAsc={true} ordenarDesc={false} />
    );
    expect(getByTestId('faSort')).toHaveClass('hidden');
    expect(getByTestId('faSortUp')).not.toHaveClass('hidden');
    expect(getByTestId('faSortDown')).toHaveClass('hidden');
  })
})