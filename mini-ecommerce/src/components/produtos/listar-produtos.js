import React from 'react'
import placeholder from '../../imagens/286x180.png'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function ListarProdutos() {

  const produtos = [
    { nome: 'aprendendo java', preco: 'R$ 59,00' },
    { nome: 'javascript em 24', preco: 'R$ 19,00' },
    { nome: 'react em 7 dias', preco: 'R$ 29,00' },
    { nome: 'algoritmos e estrutura de dados', preco: 'R$ 25,00' },
    { nome: 'startup', preco: 'R$ 29,00' },
    { nome: 'Teste unitarios com jasmine', preco: 'R$ 14,00' },
    { nome: 'apis restful com spring e java', preco: 'R$ 159,00' },
    { nome: 'Typescript na pratica', preco: 'R$ 59,00' }
  ]

  function render() {
    <Card
      style={{ width: '18rem', margin: '10px', float: 'left' }} >
        <Card.Img variant="top" src={placeholder} />
        <Card.Body className="text-center">
          <Card.Title style={{ height: '40px' }}>
            {/* nome do produto  */}
          </Card.Title>
          <Card.Text>
            Descrição do produto aqui....
          </Card.Text>
        </Card.Body>
    </Card>

  }

  return ();
}

export default ListarProdutos;