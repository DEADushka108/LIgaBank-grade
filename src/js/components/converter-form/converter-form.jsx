import React, {Fragment, PureComponent} from 'react';
import {getCurrencyExchange} from '../../store/currencies/selector';
import {Operation as CurrencyOperation} from '../../store/currencies/currencies';
import {codes} from '../../utils/const';
import { connect } from 'react-redux';

class ConverterForm extends PureComponent {
  constructor(props) {
    super(props);

    this._handleChangeRates = this._handleChangeRates.bind(this);
  }

  componentDidUpdate() {
    const {date, sellCode, buyCode, loadCurrencyExchange} = this.props;
    loadCurrencyExchange(date, sellCode, buyCode)
  }

  _handleChangeRates() {
    const {date, sellCode, buyCode, loadCurrencyExchange} = this.props;
    loadCurrencyExchange(date, sellCode, buyCode);
  }

  render() {
    const {onSellCodeChange, onBuyCodeChange, onSellAmountChange, onBuyAmountChange, onDateChange, date, dateFrom, dateTo, sellAmount, buyAmount} = this.props;
    return <Fragment>
    <section className="page-main__converter converter">
      <h2 className="converter__title">Конвертер валют</h2>
      <form className="converter__form" action="#" method="GET">
        <fieldset className="converter__fieldset">
          <legend className="visually-hidden">Форма конвертера</legend>
          <ul className="converter__list">
            <li className="converter__list-item">
              <p className="converter__item">
                <label className="converter__label" htmlFor="currency-sell">У меня есть</label>
                <input className="converter__input" id="currency-sell" type="number" name="currency-sell" value={sellAmount} onChange={(evt) => {
                  onSellAmountChange(evt);
                }}/>
              </p>
              <p className="converter__item">
                <select className="converter__select" id="sell" onChange={(evt) => {
                  onSellCodeChange(evt);
                  this._handleChangeRates();
                }}>
                  {codes.map((code) => {
                    return <option key={code} value={code}>{code}</option>})
                  };
                </select>
              </p>
            </li>
            <li className="converter__list-item">
              <p className="converter__item">
                <label className="converter__label" htmlFor="currency-buy">Хочу приобрести</label>
                <input className="converter__input" id="currency-buy" type="number" name="currency-buy" value={buyAmount} onChange={(evt) => {
                  onBuyAmountChange(evt);
                }}/>
              </p>
              <p className="converter__item">
                <select className="converter__select" id="buy" onChange={(evt) => {
                  onBuyCodeChange(evt);
                  this._handleChangeRates();
                }}>
                {codes.map((code) => {
                    return <option key={code} value={code}>{code}</option>})
                  };
                </select>
              </p>
            </li>
          </ul>
          <p className="converter__item">
            <label className="visually-hidden" htmlFor="date">Дата</label>
            <input className="converter__input" name="date" id="date" type="date" value={date} min={dateFrom} max={dateTo} onChange={(evt) => {
              onDateChange(evt);
              this._handleChangeRates();
            }}></input>
            <svg className="converter__calendar-icon">
              <use xlinkHref="#calendar"></use>
            </svg>
          </p>
        </fieldset>
        <button className="converter__button" type="submit">Сохранить результат</button>
      </form>
    </section>
  </Fragment>;
  }
};

ConverterForm.propTypes = {};

const mapDispatchToProps = (dispatch) => ({
  loadCurrencyExchange(date, from, to) {
    dispatch(CurrencyOperation.loadCurrencyExchange(date, from, to));
  },
})

export {ConverterForm}
export default connect(null, mapDispatchToProps)(ConverterForm);
