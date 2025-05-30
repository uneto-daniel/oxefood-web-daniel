import axios from "axios";
import InputMask from "comigo-tech-react-input-mask";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  Divider,
  Form,
  FormField,
  Icon,
  TextArea,
} from "semantic-ui-react";
import MenuSistema from "../../MenuSistema";

export default function FormProduto() {
  const navigate = useNavigate();

  const [titulo, setTitulo] = useState('');
  const [codigoDoProduto, setCodigoDoProduto] = useState('');
  const [descricao, setDescricao] = useState('');
  const [valorUnitario, setValorUnitario] = useState('');
  const [tempoMinimoDeEntrega, setTempoMinimoDeEntrega] = useState('');
  const [tempoMaximoDeEntrega, setTempoMaximoDeEntrega] = useState('');

  function salvar() {
    let ProdutoRequest = {
      titulo: titulo,
      codigoDoProduto: codigoDoProduto,
      descricao: descricao,
      valorUnitario: valorUnitario,
      tempoMinimoDeEntrega: tempoMinimoDeEntrega,
      tempoMaximoDeEntrega: tempoMaximoDeEntrega
    };

    axios.post("http://localhost:8080/api/produto", ProdutoRequest)
      .then((response) => {
        console.log('Produto cadastrado com sucesso.');
        navigate('/list-produto');
      })
      .catch((error) => {
        console.log('Erro ao incluir o um produto.');
      });
  }

  return (
    <div>
      <MenuSistema tela={"produto"} />
      <div style={{ marginTop: "3%" }}>
        <Container textAlign="justified">
          <h2>
            <span style={{ color: "darkgray" }}>
              Produto &nbsp;
              <Icon name="angle double right" size="small" />
            </span>
            Cadastro
          </h2>

          <Divider />

          <div style={{ marginTop: "4%" }}>
            <Form>
              <Form.Group widths="equal">
                <Form.Input required fluid label="Título do Produto">
                  <InputMask
                    className="ui input"
                    placeholder="Informe o título do produto"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                  />
                </Form.Input>

                <Form.Input required fluid label="Código do Produto">
                  <InputMask
                    className="ui input"
                    placeholder="Informe o código do produto"
                    value={codigoDoProduto}
                    onChange={(e) => setCodigoDoProduto(e.target.value)}
                  />
                </Form.Input>
              </Form.Group>

              <FormField>
                <label>Descrição</label>
                <TextArea
                  placeholder="Descrição"
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                />
              </FormField>

              <Form.Group>
                <Form.Input
                  fluid
                  required
                  label="Valor Unitário"
                  width={6}
                  value={valorUnitario}
                  onChange={(e) => setValorUnitario(e.target.value)}
                />

                <Form.Input
                  fluid
                  label="Tempo de Entrega Mínimo em Minutos"
                  width={7}
                >
                  <InputMask
                    className="ui input"
                    placeholder="30"
                    value={tempoMinimoDeEntrega}
                    onChange={(e) => setTempoMinimoDeEntrega(e.target.value)}
                  />
                </Form.Input>

                <Form.Input
                  fluid
                  label="Tempo de Entrega Máximo em Minutos"
                  width={7}
                >
                  <InputMask
                    className="ui input"
                    placeholder="40"
                    value={tempoMaximoDeEntrega}
                    onChange={(e) => setTempoMaximoDeEntrega(e.target.value)}
                  />
                </Form.Input>
              </Form.Group>
            </Form>

            <div style={{ marginTop: "4%" }}>
              <Button
                type="button"
                inverted
                circular
                icon
                labelPosition="left"
                color="orange"
                onClick={() => navigate('/list-produto')}
              >
                <Icon name="reply" />
                Voltar
              </Button>

              <Button
                inverted
                circular
                icon
                labelPosition="left"
                color="blue"
                floated="right"
                onClick={() => salvar()}
              >
                <Icon name="save" />
                Salvar
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
