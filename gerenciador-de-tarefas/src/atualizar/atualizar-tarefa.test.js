import React from 'react';
import ReactDOM from 'react-dom';
import AtualizarTarefa from './atualizar-tarefa';
import Tarefa from '../models/tarefa.model';
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

describe('Teste do componente de atualizacao de tarefas', () => {

  const tarefaId = 1;
  const tarefa = new Tarefa(tarefaId, 'Nova Tarefa', false);

  beforeEach(() => {
    localStorage['tarefas'] = JSON.stringify([tarefa])
  })

	it('deve renderizar o componente sem erros', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AtualizarTarefa id={1} />, div);
    ReactDOM.unmountComponentAtNode(div)
  })



})