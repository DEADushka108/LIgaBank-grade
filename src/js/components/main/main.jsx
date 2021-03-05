import React, {Fragment} from 'react';
import ConverterForm from '../converter-form/converter-form';
import Footer from '../footer/footer';
import Header from '../header/header';
import HistoryCard from '../history-card/history-card';

const Main = () => {
  return <Fragment>
    <Header/>
    <main className="page-main">
      <h1 className="page-main__title">Лига банк</h1>
      <p className="page-main__text">Кредиты на любой случай</p>
      <a className="page-main__button">Рассчитать кредит</a>

      <ConverterForm/>

      <HistoryCard/>
    </main>

    <Footer/>

  </Fragment>;
};

export default Main;
