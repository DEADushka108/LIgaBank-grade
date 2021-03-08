import React, {Fragment} from 'react';
import ConverterForm from '../converter-form/converter-form';
import Footer from '../footer/footer';
import Header from '../header/header';
import HistoryCard from '../history-card/history-card';
import PromoCard from '../promo-card/promo-card';
import withCodes from '../../hocs/with-codes/with-codes';
import withAmount from '../../hocs/with-amount/with-amount';
import withDate from '../../hocs/with-date/with-date';
import {getCurrencyExchange} from '../../store/currencies/selector';
import {connect} from 'react-redux';

const ConverterFormWrapped = withDate(withAmount(withCodes(ConverterForm)));

const Main = (props) => {
  const {exchangeCurrency} = props;
  return <Fragment>
    <Header/>
    <main className="page-main">
      <h1 className="visually-hidden">Конвертер валют от лига банка</h1>

      <PromoCard/>

      <ConverterFormWrapped exchangeCurrency={exchangeCurrency}/>

      <HistoryCard/>
    </main>

    <Footer/>

  </Fragment>;
};

const mapStateToProps = (state) => ({
  exchangeCurrency: getCurrencyExchange(state),
})

export {Main}
export default connect(mapStateToProps)(Main);
