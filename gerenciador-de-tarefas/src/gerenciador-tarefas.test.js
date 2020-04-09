import React from 'react';
import ReacDOM from 'react-dom'
import GerenciadorTarefas from './gerenciador-tarefas';

test('renders learn react link', () => {
  const div = document.createElement('div');
  ReacDOM.render(<GerenciadorTarefas />, div);
  ReacDOM.unmountComponentAtNode(div)
});
