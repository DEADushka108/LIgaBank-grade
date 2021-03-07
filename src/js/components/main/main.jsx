import React, {Fragment} from 'react';
import ConverterForm from '../converter-form/converter-form';
import Footer from '../footer/footer';
import Header from '../header/header';
import HistoryCard from '../history-card/history-card';
import PromoCard from '../promo-card/promo-card';
import withCodes from '../../hocs/with-codes/with-codes';
import withAmount from '../../hocs/with-amount/with-amount';
import withDate from '../../hocs/with-date/with-date';

const ConverterFormWrapped = withDate(withAmount(withCodes(ConverterForm)));

const Main = () => {
  return <Fragment>
    <Header/>
    <main className="page-main">
      <h1 className="visually-hidden">Конвертер валют от лига банка</h1>

      <PromoCard/>

      <ConverterFormWrapped/>

      <HistoryCard/>
    </main>

    <Footer/>

  </Fragment>;
};

export default Main;
