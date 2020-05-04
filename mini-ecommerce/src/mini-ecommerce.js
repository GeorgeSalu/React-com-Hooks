import React, { useState } from 'react';
import './mini-ecommerce.css';
import Menu from './components/menu/menu';

function MiniEcommerce() {

  const [carrinho, setCarrinho] = useState({ produtos: [] })
  const [exibirProdutos, setExibirProdutos] = useState(true);
  const [exibirCheckout, setExibirCheckout] = useState(true);
  const [total, setTotal] = useState('0,00');

  return (
    <div>
      <Menu />
    </div>
  );
}

export default MiniEcommerce;
