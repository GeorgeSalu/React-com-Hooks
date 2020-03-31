import React from 'react';
import ReactDOM from 'react-dom'
import Calculadora from './calculadora';

test('renders learn react link', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Calculadora />, div)
  ReactDOM.unmountComponentAtNode(div);
});
