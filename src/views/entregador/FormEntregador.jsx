import InputMask from 'comigo-tech-react-input-mask';
import React, { useState } from "react";
import { Button, Container, Divider, Form, FormGroup, FormInput, FormRadio, Icon } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';
import axios from "axios";


const estados = [
    { key: 'AC', value: 'AC', text: 'Acre' },
    { key: 'AL', value: 'AL', text: 'Alagoas' },
    { key: 'AP', value: 'AP', text: 'Amapá' },
    { key: 'AM', value: 'AM', text: 'Amazonas' },
    { key: 'BA', value: 'BA', text: 'Bahia' },
    { key: 'CE', value: 'CE', text: 'Ceará' },
    { key: 'DF', value: 'DF', text: 'Distrito Federal' },
    { key: 'ES', value: 'ES', text: 'Espírito Santo' },
    { key: 'GO', value: 'GO', text: 'Goiás' },
    { key: 'MA', value: 'MA', text: 'Maranhão' },
    { key: 'MT', value: 'MT', text: 'Mato Grosso' },
    { key: 'MS', value: 'MS', text: 'Mato Grosso do Sul' },
    { key: 'MG', value: 'MG', text: 'Minas Gerais' },
    { key: 'PA', value: 'PA', text: 'Pará' },
    { key: 'PB', value: 'PB', text: 'Paraíba' },
    { key: 'PR', value: 'PR', text: 'Paraná' },
    { key: 'PE', value: 'PE', text: 'Pernambuco' },
    { key: 'PI', value: 'PI', text: 'Piauí' },
    { key: 'RJ', value: 'RJ', text: 'Rio de Janeiro' },
    { key: 'RN', value: 'RN', text: 'Rio Grande do Norte' },
    { key: 'RS', value: 'RS', text: 'Rio Grande do Sul' },
    { key: 'RO', value: 'RO', text: 'Rondônia' },
    { key: 'RR', value: 'RR', text: 'Roraima' },
    { key: 'SC', value: 'SC', text: 'Santa Catarina' },
    { key: 'SP', value: 'SP', text: 'São Paulo' },
    { key: 'SE', value: 'SE', text: 'Sergipe' },
    { key: 'TO', value: 'TO', text: 'Tocantins' }
    
];

export default function FormEntregador() {

    const [nome, setNome] = useState();
    const [cpf, setCpf] = useState();
    const [rg, setRg]= useState();
    const [dataNascimento, setDataNascimento] = useState();
    const [foneCelular, setFoneCelular] = useState();
    const [foneFixo, setFoneFixo] = useState();
    const [ativo, setAtivo] = useState(true);


    const handleAtivoChange = (e, { value }) => {
        setAtivo(value);
    };

    return (
        <div>
            <MenuSistema tela={'entregador'} />

            <div style={{ marginTop: '3%' }}>
                <Container textAlign='justified' >
                    <h2> <span style={{ color: 'darkgray' }}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>
                    <Divider />
                    <div style={{ marginTop: '4%' }}>
                        <Form>
                            <Form.Group widths='equal'>
                                <Form.Input
                                    required
                                    fluid
                                    label='Nome'>
                                </Form.Input>
                                <Form.Input
                                    required
                                    fluid
                                    label='CPF'>
                                    <InputMask
                                        required
                                        mask="999.999.999-99"
                                        value={cpf}
			                            onChange={e => setCpf(e.target.value)}

                                    />
                                </Form.Input>
                                <Form.Input
                                    fluid
                                    label='RG'>
                                </Form.Input>
                            </Form.Group>

                            <Form.Group>
                                <Form.Input
                                    fluid
                                    label='DT Nascimento'
                                    width={6}>
                                    <InputMask
                                        mask="99/99/9999"
                                        maskChar={null}
                                        placeholder="Ex: 20/03/1985"
                                    />
                                </Form.Input>
                                <Form.Input
                                    fluid
                                    required
                                    label='Fone Celular'
                                    width={6}>
                                    <InputMask
                                        mask="(99) 9999.99999"
                                    />
                                </Form.Input>
                                <Form.Input
                                    fluid
                                    label='Fone Fixo'
                                    width={6}>
                                    <InputMask
                                        mask="(99) 9999.9999"
                                    />
                                </Form.Input>
                                <Form.Input
                                    fluid
                                    label='QTD de Entregas Realizadas'
                                    width={10}>
                                </Form.Input>
                                <Form.Input
                                    fluid
                                    label='Valor por Frete'
                                    width={6}>
                                </Form.Input>
                            </Form.Group>

                            <FormGroup widths='equal'>
                                <FormInput
                                    label="Rua"
                                    width={20}>
                                </FormInput>
                                <FormInput
                                    label="Número"
                                    width={80}>
                                </FormInput>
                            </FormGroup>

                            <FormGroup widths='equal'>
                                <FormInput
                                    label="Bairro"
                                    width={20}>
                                </FormInput>
                                <FormInput
                                    label="Cidade"
                                    width={80}>
                                </FormInput>
                                <FormInput
                                    label="Cep"
                                    width={80}>
                                    <InputMask
                                        mask="999.999-99"
                                    />
                                </FormInput>
                            </FormGroup>
                            <Form>
                                <Form.Select
                                    fluid
                                    label="UF"
                                    options={estados}
                                    placeholder="Selecione o Estado"
                                />
                            </Form>

                            <FormInput widths='equal'
                                label="Complemento">
                            </FormInput>

                            <FormGroup inline>
                                <label>Ativo</label>
                                <FormRadio
                                    label='Sim'
                                    checked={ativo}
                                    onChange={e=>setAtivo(true)}
                                />
                                <FormRadio
                                    label='Não'
                                    checked={!ativo}
                                    onChange={e=>setAtivo(false)}
                                />
                            </FormGroup>
                        </Form>

                        <div style={{ marginTop: '4%' }}>
                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'>
                                <Icon name='reply' />
                                Voltar
                            </Button>
                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'>
                                <Icon name='save' />
                                Salvar
                            </Button>
                        </div>

                    </div>
                </Container>
            </div>
        </div>
    );
}
