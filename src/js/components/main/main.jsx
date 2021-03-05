import React, {Fragment} from 'react';
import ConverterForm from '../converter-form/converter-form';
import Footer from '../footer/footer';
import Header from '../header/header';
import HistoryCard from '../history-card/history-card';
import PromoCard from '../promo-card/promo-card';

const Main = () => {
  return <Fragment>
    <Header/>
    <main className="page-main">
      <h1 className="visually-hidden">Конвертер валют от лига банка</h1>

      <PromoCard/>

      <ConverterForm/>

      <HistoryCard/>
    </main>

    <Footer/>

  </Fragment>;
};

export default Main;
