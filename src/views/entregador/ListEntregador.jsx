import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Button, Container, Divider, Icon, Modal, Table, Header, Image } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import MenuSistema from '../../MenuSistema';

export default function ListEntregador() {

  const [modalAberto, setModalAberto] = useState(false);
  const [entregadorSelecionado, setEntregadorSelecionado] = useState(null);
  const [lista, setLista] = useState([]);

  useEffect(() => {
    carregarLista();
  }, []);

  function carregarLista() {
    axios.get("http://localhost:8080/api/entregador")
      .then((response) => {
        setLista(response.data);
      });
  }

  function formatarData(dataParam) {
    if (!dataParam) return '';
    const [ano, mes, dia] = dataParam.split('-');
    return `${dia}/${mes}/${ano}`;
  }

   {/Função para abrir o modal e definir o entregador selecionado
  function abrirModal(entregador) {
    setEntregadorSelecionado(entregador);
    setModalAberto(true);
  }

  return (
    <div>
      <MenuSistema tela={'entregador'} />
      <div style={{ marginTop: '3%' }}>

        <Container textAlign='justified'>
          <h2> Entregador </h2>
          <Divider />

          <div style={{ marginTop: '4%' }}>
            
{/* __________________>Botão Novo para novo Cdastro <____________________ */}
            <Button
              label='Novo'
              circular
              color='orange'
              icon='clipboard outline'
              floated='right'
              as={Link}
              to='/form-entregador'
            />

            <br /><br /><br />

            <Table color='orange' sortable celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Nome</Table.HeaderCell>
                  <Table.HeaderCell>CPF</Table.HeaderCell>
                  <Table.HeaderCell>RG</Table.HeaderCell>
                  <Table.HeaderCell>Data de Nascimento</Table.HeaderCell>
                  <Table.HeaderCell>Fone Celular</Table.HeaderCell>
                  <Table.HeaderCell>Fone Fixo</Table.HeaderCell>
                  <Table.HeaderCell textAlign='center'>Ações</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {lista.map(entregador => (
                  <Table.Row key={entregador.id}>
                    <Table.Cell>{entregador.nome}</Table.Cell>
                    <Table.Cell>{entregador.cpf}</Table.Cell>
                    <Table.Cell>{entregador.rg}</Table.Cell>
                    <Table.Cell>{formatarData(entregador.dataNascimento)}</Table.Cell>
                    <Table.Cell>{entregador.foneCelular}</Table.Cell>
                    <Table.Cell>{entregador.foneFixo}</Table.Cell>
                    <Table.Cell textAlign='center'>
                       
{/* __________________>Botões <____________________ */}
{/* __________________>Botão Editar <____________________ */}

                       <Button
                        inverted
                        circular
                        color='green'
                        title='Editar'
                        icon
                      >
                        <Icon name='edit' />
                      </Button> &nbsp;
{/* __________________>Botão Remover <____________________ */}

                      <Button
                        inverted
                        circular
                        color='red'
                        title='Remover'
                        icon
                      >
                        <Icon name='trash' />
                      </Button> &nbsp;
                     
{/* __________________>Botão para Abrir detalhes(modal) <____________________ */}

                      <Button
                        inverted
                        circular
                        color="blue"
                        title="Ver detalhes"
                        icon
                        onClick={() => abrirModal(entregador)}
                      >
                        <Icon name="eye" />
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        </Container>
      </div>

      //Modal de detalhes
      <Modal
        open={modalAberto}
        onClose={() => setModalAberto(false)}
        size='small'
      >
        <Modal.Header>Detalhes do Entregador</Modal.Header>
        <Modal.Content image>
          <Image
            size='small'
            src={entregadorSelecionado?.fotoPerfil || '/images/avatar/large/matthew.png'}{/*acrescentar foto para perfil, talvez essa não funcione*/}

            wrapped
          />
          <Modal.Description>
            <Header>{entregadorSelecionado?.nome}</Header>
            <p><strong>CPF:</strong> {entregadorSelecionado?.cpf}</p>
            <p><strong>RG:</strong> {entregadorSelecionado?.rg}</p>
            <p><strong>Data de Nascimento:</strong> {formatarData(entregadorSelecionado?.dataNascimento)}</p>
            <p><strong>Celular:</strong> {entregadorSelecionado?.foneCelular}</p>
            <p><strong>Fixo:</strong> {entregadorSelecionado?.foneFixo}</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='black' onClick={() => setModalAberto(false)}>
            Fechar
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
}
