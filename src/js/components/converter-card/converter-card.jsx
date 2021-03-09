import React, {Fragment, PureComponent} from 'react';
import PropTypes from 'prop-types';
import HistoryCard from '../history-card/history-card';
import {Operation as CurrencyOperation} from '../../store/currencies/currencies';
import {ActionCreator as StoriesAction} from '../../store/stories/stories';
import {codes} from '../../utils/const';
import {connect} from 'react-redux';
import {getStories} from '../../store/stories/selector';
import moment from 'moment';

class ConverterCard extends PureComponent {
  constructor(props) {
    super(props);

    this._handleChangeRates = this._handleChangeRates.bind(this);
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
  }

  componentDidUpdate() {
    const {date, sellCode, buyCode, loadCurrencyExchange} = this.props;
    loadCurrencyExchange(date, sellCode, buyCode);
  }

  _handleChangeRates() {
    const {date, sellCode, buyCode, loadCurrencyExchange} = this.props;
    loadCurrencyExchange(date, sellCode, buyCode);
  }

  _handleFormSubmit() {
    const {updateStories, date, sellAmount, sellCode, buyAmount, buyCode} = this.props;
    const story = {
      date: moment(date).format(`DD.MM.YYYY`),
      sellAmount,
      sellCode,
      buyAmount,
      buyCode,
    };
    updateStories(story);
  }

  render() {
    const {onSellCodeChange, onBuyCodeChange, onSellAmountChange, onBuyAmountChange, onDateChange, date, dateFrom, dateTo, sellAmount, buyAmount, stories} = this.props;
    return <Fragment>
      <section className="page-main__converter converter">
        <h2 className="converter__title">Конвертер валют</h2>
        <form className="converter__form" onSubmit={(evt) => {
          evt.preventDefault();
          this._handleFormSubmit();
        }}>
          <fieldset className="converter__fieldset">
            <legend className="visually-hidden">Форма конвертера</legend>
            <ul className="converter__list">
              <li className="converter__list-item">
                <p className="converter__item">
                  <label className="converter__label" htmlFor="currency-sell">У меня есть</label>
                  <input className="converter__input" id="currency-sell" type="number" step="0.05" name="currency-sell" value={sellAmount} onChange={(evt) => {
                    onSellAmountChange(evt);
                  }}/>
                </p>
                <p className="converter__item">
                  <select className="converter__select" id="sell" onChange={(evt) => {
                    onSellCodeChange(evt);
                  }}>
                    {codes.map((code) => {
                      return <option key={code} value={code}>{code}</option>;
                    })
                    };
                  </select>
                </p>
              </li>
              <li className="converter__list-item converter__list-item--icons">
                <svg className="converter__arrow-icon converter__arrow-icon--right">
                  <use xlinkHref="#arrow-right"></use>
                </svg>
                <svg className="converter__arrow-icon converter__arrow-icon--left">
                  <use xlinkHref="#arrow-left"></use>
                </svg>
              </li>
              <li className="converter__list-item">
                <p className="converter__item">
                  <label className="converter__label" htmlFor="currency-buy">Хочу приобрести</label>
                  <input className="converter__input" id="currency-buy" type="number" step="0.05" name="currency-buy" value={buyAmount} onChange={(evt) => {
                    onBuyAmountChange(evt);
                  }}/>
                </p>
                <p className="converter__item">
                  <select className="converter__select" id="buy" onChange={(evt) => {
                    onBuyCodeChange(evt);
                  }}>
                    {codes.map((code) => {
                      return <option key={code} value={code}>{code}</option>;
                    })
                    };
                  </select>
                </p>
              </li>
            </ul>
            <p className="converter__item">
              <label className="visually-hidden" htmlFor="date">Дата</label>
              <input className="converter__input converter__input--calendar" name="date" id="date" type="date" value={date} min={dateFrom} max={dateTo} onChange={(evt) => {
                onDateChange(evt);
              }}></input>
              {/* <svg className="converter__calendar-icon">
                <use xlinkHref="#calendar"></use>
              </svg> */}
            </p>
          </fieldset>
          <button className="converter__button" type="submit">
            Сохранить результат
          </button>
        </form>

        {stories.length !== 0 && <HistoryCard />}

      </section>
    </Fragment>;
  }
}

ConverterCard.propTypes = {
  onSellCodeChange: PropTypes.func.isRequired,
  onBuyCodeChange: PropTypes.func.isRequired,
  onSellAmountChange: PropTypes.func.isRequired,
  onBuyAmountChange: PropTypes.func.isRequired,
  onDateChange: PropTypes.func.isRequired,
  updateStories: PropTypes.func.isRequired,
  date: PropTypes.string.isRequired,
  dateFrom: PropTypes.string.isRequired,
  dateTo: PropTypes.string.isRequired,
  sellAmount: PropTypes.string.isRequired,
  buyAmount: PropTypes.string.isRequired,
  stories: PropTypes.array.isRequired,
  sellCode: PropTypes.string.isRequired,
  buyCode: PropTypes.string.isRequired,
  loadCurrencyExchange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  stories: getStories(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadCurrencyExchange(date, from, to) {
    dispatch(CurrencyOperation.loadCurrencyExchange(date, from, to));
  },
  updateStories(story) {
    dispatch(StoriesAction.updateStories(story));
  },
});

export {ConverterCard};
export default connect(mapStateToProps, mapDispatchToProps)(ConverterCard);
