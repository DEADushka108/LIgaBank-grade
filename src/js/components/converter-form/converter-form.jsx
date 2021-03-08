import React, {Fragment, PureComponent} from 'react';
import {Operation as CurrencyOperation} from '../../store/currencies/currencies';
import {ActionCreator as StoriesAction} from '../../store/stories/stories';
import {codes} from '../../utils/const';
import {connect} from 'react-redux';
import {getStories} from '../../store/stories/selector';

class ConverterForm extends PureComponent {
  constructor(props) {
    super(props);

    this._handleChangeRates = this._handleChangeRates.bind(this);
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
  }

  componentDidUpdate() {
    const {date, sellCode, buyCode, loadCurrencyExchange} = this.props;
    loadCurrencyExchange(date, sellCode, buyCode)
  }

  _handleChangeRates() {
    const {date, sellCode, buyCode, loadCurrencyExchange} = this.props;
    loadCurrencyExchange(date, sellCode, buyCode);
  }

  _handleFormSubmit() {
    const {stories, updateStories, date, sellAmount, sellCode, buyAmount, buyCode} = this.props;
    const story = {
      date: date,
      sellAmount: sellAmount,
      sellCode: sellCode,
      buyAmount: buyAmount,
      buyCode: buyCode,
    };
    if (stories.length > 9) {
      stories.pop();
    };
    stories.unshift(story);
    updateStories(stories);
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
            }}></input>
            <svg className="converter__calendar-icon">
              <use xlinkHref="#calendar"></use>
            </svg>
          </p>
        </fieldset>
        <button className="converter__button" type="submit" onClick={(evt) => {
          evt.preventDefault();
          this._handleFormSubmit();
        }}>
          Сохранить результат
        </button>
      </form>
    </section>
  </Fragment>;
  }
};

ConverterForm.propTypes = {};

const mapStateToProps = (state) => ({
  stories: getStories(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadCurrencyExchange(date, from, to) {
    dispatch(CurrencyOperation.loadCurrencyExchange(date, from, to));
  },
  updateStories(stories) {
    dispatch(StoriesAction.updateStories(stories));
  },
})

export {ConverterForm}
export default connect(mapStateToProps, mapDispatchToProps)(ConverterForm);
