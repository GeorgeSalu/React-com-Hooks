import React from 'react';
import ReactDOM from 'react-dom';
import ConcluirTarefa from './concluir-tarefa';
import Tarefa from '../models/tarefa.model';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Teste do componente de conclusao de tarefas', () => {

  const nomeTarefa = 'Tarefa de teste';
  const tarefa = new Tarefa(1, nomeTarefa, false);

})