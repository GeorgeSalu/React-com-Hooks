import React from 'react'
import ReactDOM from 'react-dom'
import RemoverTarefa from './remover-tarefa'
import Tarefa from '../models/tarefa.model'
import {render, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('teste do componente de remocao de tarefas',() => {

  const nomeTarefa = 'Tarefa de teste';
  const tarefa = new Tarefa(1, nomeTarefa, false);

})