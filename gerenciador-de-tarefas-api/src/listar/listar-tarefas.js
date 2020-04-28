import React, { useState, useEffect } from 'react';
import { A } from 'hookrouter';
import { Table, Form } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import ItensListaTarefas from './itens-lista-tarefas'
import Paginacao from './paginacao'
import Ordenacao from './ordenacao'
import axios from 'axios'

function ListarTarefas() {

  const ITENS_POR_PAG = 3;
  const API_URL_LISTAR_TAREFAS = 'http://localhost:3001/gerenciador-tarefas'

  const [tarefas, setTarefas] = useState([]);
  const [carregarTarefas, setCarregarTarefas] = useState(true);
  const [totalItems, setTotalItems] = useState(0);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [ordernarAsc, setOrdernarAsc] = useState(false);
  const [ordernarDesc, setOrdernarDesc] = useState(false);
  const [filtroTarefa, setFiltroTarefa] = useState('')

  useEffect(() => {
    async function obterTarefas() {
      
    }

    if(carregarTarefas) {
      obterTarefas();
      setCarregarTarefas(false)
    }
  }, [carregarTarefas, paginaAtual, ordernarAsc, ordernarDesc, filtroTarefa]);

  function handleMudarPagina(pagina) {
    setPaginaAtual(pagina);
    setCarregarTarefas(true);
  }

  function handleOrdenar(event) {
    event.preventDefault();
    if(!ordernarAsc && !ordernarDesc) {
      setOrdernarAsc(true);
      setOrdernarDesc(false);
    } else if(ordernarAsc) {
      setOrdernarAsc(false);
      setOrdernarDesc(true);
    } else {
      setOrdernarAsc(false);
      setOrdernarDesc(false);
    }
    setCarregarTarefas(true);
  }

  function handleFiltrar(event) {
    setFiltroTarefa(event.target.value);
    setCarregarTarefas(true);

  }

  return (
    <div className="text-center">
      <h3>Tarefas a fazer</h3>
      <Table striped bordered hover responsive data-testid="tabela">
        <thead>
          <tr>
            <th>
              <a href="/" onClick={handleOrdenar}>
                Tarefa
                &nbsp;
                <Ordenacao
                  ordenarAsc={ordernarAsc}
                  ordenarDesc={ordernarDesc} />
              </a>
            </th>
            <th>
              <A href="/cadastrar"
                className="btn btn-success btn-sm"
                data-testid="btn-nova-tarefa">
                <FontAwesomeIcon icon={faPlus} />
                &nbsp;
                Nova Tarefa
              </A>
            </th>
          </tr>
          <tr>
            <th>
              <Form.Control
                type="text"
                value={filtroTarefa}
                onChange={handleFiltrar}
                data-testid="txt-tarefa"
                className="filtro-tarefa" />
            </th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <ItensListaTarefas 
            tarefas={tarefas}
            recarregarTarefas={setCarregarTarefas} />
        </tbody>
      </Table>
      <Paginacao 
        totalItems={totalItems}
        itemsPorPagina={ITENS_POR_PAG}
        paginaAtual={paginaAtual}
        mudarPagina={handleMudarPagina} />
    </div> 
  )	
}

export default ListarTarefas;