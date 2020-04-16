import React from 'react';
import ReacDOM from 'react-dom';
import ItensListaTarefas from './itens-lista-tarefas';
import Tarefa from '../models/tarefa.model';
import {render, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('Teste do componente que exibe um item da listagem de tarefas', () => {

  const nomeTarefa = 'Tarefa';
  const tarefa = new Tarefa(1, nomeTarefa, false);

	it('deve renderizar o componente sem erros', () => {
    const div = document.createElement('div');
    ReacDOM.render(
      <ItensListaTarefas
        tarefas={[]}
        recarregarTarefas={() => false} />, div);
    ReacDOM.unmountComponentAtNode(div);
  })

  it('deve exibir a tarefa', () => {
    const {getByTestId} = render(
      <table>
        <tbody>
          <ItensListaTarefas 
            tarefas={[tarefa]}
            recarregarTarefas={() => false} />
        </tbody>
      </table>
    );

    expect(getByTestId('tarefa')).toHaveTextContent(nomeTarefa)
  })
})