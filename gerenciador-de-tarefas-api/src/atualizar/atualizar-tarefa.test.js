import React from 'react';
import ReactDOM from 'react-dom';
import AtualizarTarefa from './atualizar-tarefa';
import Tarefa from '../models/tarefa.model';
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import axiosMock from 'axios'

describe('Teste do componente de atualizacao de tarefas',  () => {

  const tarefaId = 1;

  it('deve atualizar uma tarefa', async () => {
    axiosMock.get.mockResolvedValueOne({ data: {nome: 'Estudar React'} })
    const {findByTestId} = render(<AtualizarTarefa id={tarefaId} />)
    fireEvent.click( await findByTestId('btn-atualizar'));
    const modal = await findByTestId('modal');
    expect(getByTestId('modal')).toHaveTextContent('Sucesso');
  })

})