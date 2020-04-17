import React from 'react'
import ReactDOM from 'react-dom'
import ListarTarefas from './listar-tarefas'
import Tarefa from '../models/tarefa.model'
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

describe('Teste do componente de listagem de tarefas', () => {

  const nomePrimeirTarefa = 'Primeira Tarefa'
  const nomeSegundaTarefa = 'Segunda Tarefa'
  const nomeTerceiraTarefa = 'Terceira Tarefa'


	it('deve renderizar o componente sem erros', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ListarTarefas />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

})