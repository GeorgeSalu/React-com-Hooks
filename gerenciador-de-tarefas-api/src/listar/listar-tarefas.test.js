import React from 'react'
import ReactDOM from 'react-dom'
import ListarTarefas from './listar-tarefas'
import Tarefa from '../models/tarefa.model'
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import axiosMock from 'axios'

describe('Teste do componente de listagem de tarefas', () => {

  const nomePrimeiraTarefa = 'Primeira Tarefa'
  const nomeSegundaTarefa = 'Segunda Tarefa'
  const nomeTerceiraTarefa = 'Terceira Tarefa'

  const listaTarefas = {
    totalItens: 3,
    tarefas: [
      new Tarefa(1, nomePrimeiraTarefa, false),
      new Tarefa(2, nomeSegundaTarefa, false),
      new Tarefa(3, nomeTerceiraTarefa, false),
    ],
    pagina: 1
  }

  it('deve exibir uma tabela contendo 3 tarefas', async () => {
    axiosMock.get.mockResolvedValueOnce({data: listaTarefas})

    const {findByTestId} = render(<ListarTarefas />);
    const tabela = await findByTestId('tabela');
    expect(tabela).toHaveTextContent(nomePrimeiraTarefa)
    expect(tabela).toHaveTextContent(nomeSegundaTarefa)
    expect(tabela).toHaveTextContent(nomeTerceiraTarefa)
  })

  it('deve filtrar os dados da tabela de tarefas',async () => {

    axiosMock.get.mockResolvedValueOnce({data: listaTarefas});
    axiosMock.get.mockResolvedValueOnce({data: {
      totalItens: 1,
      tarefas: [
        new Tarefa(1, nomePrimeiraTarefa, false)
      ],
      pagina: 1
    } });

    const {findByTestId} = render(<ListarTarefas />);
    fireEvent.change( await findByTestId('txt-tarefa'), {target: {value: nomePrimeiraTarefa}})
    const tabela = await findByTestId('tabela')
    expect(tabela).toHaveTextContent(nomePrimeiraTarefa);
    expect(tabela).not.toHaveTextContent(nomeSegundaTarefa);
    expect(tabela).not.toHaveTextContent(nomeTerceiraTarefa);
  })

})