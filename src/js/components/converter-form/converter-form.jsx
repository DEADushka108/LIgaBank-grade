import React, {Fragment} from 'react';

const ConverterForm = () => {

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
                <input className="converter__input" id="currency-sell" type="number" name="currency-sell" placeholder="1000"/>
              </p>
              <p className="converter__item">
                <select className="converter__select" id="sell">
                  <option value="ru">RUB</option>
                  <option value="us">USD</option>
                  <option value="eu">EUR</option>
                  <option value="gb">GBR</option>
                  <option value="cn">CNY</option>
                </select>
              </p>
            </li>
            <li className="converter__list-item">
              <p className="converter__item">
                <label className="converter__label" htmlFor="currency-buy">Хочу приобрести</label>
                <input className="converter__input" id="currency-buy" type="number" name="currency-buy" placeholder="1000"/>
              </p>
              <p className="converter__item">
                <select className="converter__select" id="buy">
                  <option value="ru">RUB</option>
                  <option value="us">USD</option>
                  <option value="eu">EUR</option>
                  <option value="gb">GBR</option>
                  <option value="cn">CNY</option>
                </select>
              </p>
            </li>
          </ul>
          <p className="converter__item">
            <label className="visually-hidden" htmlFor="date">Дата</label>
            <input className="converter__input" name="date" id="date" type="date"></input>
          </p>
        </fieldset>
        <button className="converter__button" type="submit">Сохранить результат</button>
      </form>
    </section>
  </Fragment>;
};

export default ConverterForm;
