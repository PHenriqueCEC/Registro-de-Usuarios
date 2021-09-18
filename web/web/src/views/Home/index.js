import React from 'react';
import * as S from './styles';

//API
import api from '../../services/api';

//COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Registration from '../Registration';

function Home() {
  return (
    <S.Container>
      <Header />
      <Footer />
      <Registration />

    </S.Container>
  )
}

export default Home;
