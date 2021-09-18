import React, { useState, useEffect } from 'react';
import * as S from './styles';

import api from '../../services/api';

function Header() {
  
  const[macaddress, setMacaddress] = useState('11:11:11:11:11:11');
  const[cpf, setCpf] = useState("");
  const[password, setPassword] = useState("");

  async function Login() {

    await api.post(`/login`, {
        macaddress,
        cpf,
        password

    }).then(() =>
        alert('Usuário logado!')
    )
}

  return (
    <S.Container>
     
      <S.LeftSide>
        <p> LOGIN </p>
      </S.LeftSide>

      <S.RightSide>
        <input type="text" placeholder="email, CPF, PIS"
        onChange={e => setCpf(e.target.value)} value={cpf} />
        
        <input type="password" placeholder="senha" 
        onChange={e => setPassword(e.target.value)} value={password}/>
       
        <button type="button" onClick={Login}> Logar </button>
      </S.RightSide>
    
    </S.Container>
  )
}

export default Header;
