import React, { useState, useEffect } from 'react';
import * as S from './styles';
import { Button, Form, Row, Col } from 'react-bootstrap';

import api from '../../services/api';

function Registration() {

    const [macaddress, setMacaddress] = useState('11:11:11:11:11:11');
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [street, setStreet] = useState();
    const [number, setNumber] = useState();
    const [complement, setComplement] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [country, setCountry] = useState();
    const [cep, setCep] = useState();
    const [cpf, setCpf] = useState();
    const [pis, setPis] = useState();

    async function Save() {

        //Validação dos dados de entrada
        if (!name)
            return alert('Nome é obrigatório!')
        else if (!email)
            return alert('Email é obrigatório!')
        else if (!password)
            return alert('Senha é obrigatório!')
        else if (!street)
            return alert('Endereço é obrigatório!')
        else if (!number)
            return alert('Número é obrigatório!')
        else if (!complement)
            return alert('Complemento é obrigatório!')
        else if (!city)
            return alert('Cidade é obrigatório!')
        else if (!state)
            return alert('Estado é obrigatório!')
        else if (!country)
            return alert('País é obrigatório!')
        else if (!cep)
            return alert('CEP é obrigatório!')
        else if (!cpf)
            return alert('CPF é obrigatório!')
        else if (!pis)
            return alert('PIS é obrigatório!')


        await api.post(`/task`, {
            macaddress,
            name,
            email,
            password,
            street,
            number,
            complement,
            city,
            state,
            country,
            cep,
            cpf,
            pis

        }).then(() =>
            alert('CADASTRO FEITO COM SUCESSO!')
        )
    }

    return (
        <S.Container>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="Nome" placeholder="Digite seu nome"
                            onChange={e => setName(e.target.value)} value={name} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Digite seu email"
                            onChange={e => setEmail(e.target.value)} value={email} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Digite sua senha"
                            onChange={e => setPassword(e.target.value)} value={password} />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridNumber">
                        <Form.Label>Endereço</Form.Label>
                        <Form.Control placeholder="Ex...Rua Guiricema "
                            onChange={e => setStreet(e.target.value)} value={street} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Número</Form.Label>
                        <Form.Control type="Number" placeholder="Ex... 86"
                            onChange={e => setNumber(e.target.value)} value={number} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Complemento</Form.Label>
                        <Form.Control type="name" placeholder="Ex... perto do... "
                            onChange={e => setComplement(e.target.value)} value={complement} />
                    </Form.Group>
                </ Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Cidade</Form.Label>
                        <Form.Control placeholder="Ex... Juiz de Fora"
                            onChange={e => setCity(e.target.value)} value={city} />
                    </Form.Group>

                    {/* <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Estado</Form.Label>
                        <Form.Select defaultValue="Selecione...">
                            <option>Selecione....</option>
                            <option>...</option>
                        </Form.Select>
                    </Form.Group> */}

                    <Form.Group as={Col} controlId="formGrid">
                        <Form.Label>Estado</Form.Label>
                        <Form.Control placeholder="Ex... Minas Gerais"
                            onChange={e => setState(e.target.value)} value={state} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>CEP</Form.Label>
                        <Form.Control placeholder="Ex... 36037-000"
                            onChange={e => setCep(e.target.value)} value={cep} />
                    </Form.Group>
                </Row>

                <Row className="mb-3">

                    <Form.Group as={Col} controlId="formGridCountry">
                        <Form.Label>País</Form.Label>
                        <Form.Control placeholder="Ex... Brasil"
                            onChange={e => setCountry(e.target.value)} value={country} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCPF">
                        <Form.Label>CPF</Form.Label>
                        <Form.Control type="cpf" placeholder="Digite seu CPF"
                            onChange={e => setCpf(e.target.value)} value={cpf} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPis">
                        <Form.Label>PIS</Form.Label>
                        <Form.Control type="cpf" placeholder="Digite seu PIS"
                            onChange={e => setPis(e.target.value)} value={pis} />
                    </Form.Group>

                </Row>

                <Button variant="primary" type="submit" onClick={Save} >
                    Cadastrar
                </Button>
            </Form>
        </S.Container>
    )
}

export default Registration;
