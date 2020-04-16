import React from 'react';
import ReacDOM from 'react-dom';
import ItensListaTarefas from './itens-lista-tarefas';
import Tarefa from '../models/tarefa.model';
import {render, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('Teste do componente que exibe um item da listagem de tarefas', () => {
	it('deve renderizar o componente sem erros', () => {
    const div = document.createElement('div');
    ReacDOM.render(
      <ItensListaTarefas
        tarefas={[]}
        recarregarTarefas={() => false} />, div);
    ReacDOM.unmountComponentAtNode(div);
  })
})