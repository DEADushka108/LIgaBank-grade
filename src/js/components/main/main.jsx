import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import ConverterCard from '../converter-card/converter-card';
import Footer from '../footer/footer';
import Header from '../header/header';
import PromoCard from '../promo-card/promo-card';
import withCodes from '../../hocs/with-codes/with-codes';
import withAmount from '../../hocs/with-amount/with-amount';
import withDate from '../../hocs/with-date/with-date';
import {getCurrencyExchange} from '../../store/currencies/selector';
import {connect} from 'react-redux';
import {getStories} from '../../store/stories/selector';

const ConverterCardWrapped = withDate(withAmount(withCodes(ConverterCard)));

const Main = (props) => {
  const {exchangeCurrency} = props;
  return <Fragment>
    <Header/>
    <main className="page-main">
      <h1 className="visually-hidden">Конвертер валют от лига банка</h1>

      <PromoCard/>

      <ConverterCardWrapped exchangeCurrency={exchangeCurrency}/>

    </main>

    <Footer/>

  </Fragment>;
};

Main.propTypes = {
  exchangeCurrency: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  exchangeCurrency: getCurrencyExchange(state),
  stories: getStories(state),
});

export {Main};
export default connect(mapStateToProps)(Main);
