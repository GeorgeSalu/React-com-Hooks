import React, { useState } from 'react';
import './mini-ecommerce.css';

function MiniEcommerce() {

  const [carrinho, setCarrinho] = useState({ produtos: [] })
  const [exibirProdutos, setExibirProdutos] = useState(true);
  const [exibirCheckout, setExibirCheckout] = useState(true);
  const [total, setTotal] = useState('0,00');

  return (
    <h1>Mini ecommerce</h1>
  );
}

export default MiniEcommerce;
