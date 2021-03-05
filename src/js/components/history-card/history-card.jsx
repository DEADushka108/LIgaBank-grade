import React, {Fragment} from 'react';

const HistoryCard = () => {
  return <Fragment>
    <section className="page-main history-card">
      <h2 className="history-card__title">История конвертаций</h2>
      <div className="history-card__currency-col">
        <ul className="history-card__list">
          <li className="history-card__item">
            <p className="history-card__date">25.11.2020</p>
            <p className="history-card__sell">1000 RUB</p>
            <svg className="history-card__arrow-icon">
              <use xlinkHref="#arrow-right"></use>
            </svg>
            <p className="history-card__buy">13,1234 USD</p>
          </li>
          <li className="history-card__item">
            <p className="history-card__date">25.11.2020</p>
            <p className="history-card__sell">1000 RUB</p>
            <svg className="history-card__arrow-icon">
              <use xlinkHref="#arrow-right"></use>
            </svg>
            <p className="history-card__buy">13,1234 USD</p>
          </li>
          <li className="history-card__item">
            <p className="history-card__date">25.11.2020</p>
            <p className="history-card__sell">1000 RUB</p>
            <svg className="history-card__arrow-icon">
              <use xlinkHref="#arrow-right"></use>
            </svg>
            <p className="history-card__buy">13,1234 USD</p>
          </li>
          <li className="history-card__item">
            <p className="history-card__date">25.11.2020</p>
            <p className="history-card__sell">1000 RUB</p>
            <svg className="history-card__arrow-icon">
              <use xlinkHref="#arrow-right"></use>
            </svg>
            <p className="history-card__buy">13,1234 USD</p>
          </li>
          <li className="history-card__item">
            <p className="history-card__date">25.11.2020</p>
            <p className="history-card__sell">1000 RUB</p>
            <svg className="history-card__arrow-icon">
              <use xlinkHref="#arrow-right"></use>
            </svg>
            <p className="history-card__buy">13,1234 USD</p>
          </li>
        </ul>
      </div>
      <div className="history-card__currency-col">
        <ul className="history-card__list">
          <li className="history-card__item">
            <p className="history-card__date">25.11.2020</p>
            <p className="history-card__sell">1000 RUB</p>
            <svg className="history-card__arrow-icon">
              <use xlinkHref="#arrow-right"></use>
            </svg>
            <p className="history-card__buy">13,1234 USD</p>
          </li>
          <li className="history-card__item">
            <p className="history-card__date">25.11.2020</p>
            <p className="history-card__sell">1000 RUB</p>
            <svg className="history-card__arrow-icon">
              <use xlinkHref="#arrow-right"></use>
            </svg>
            <p className="history-card__buy">13,1234 USD</p>
          </li>
          <li className="history-card__item">
            <p className="history-card__date">25.11.2020</p>
            <p className="history-card__sell">1000 RUB</p>
            <svg className="history-card__arrow-icon">
              <use xlinkHref="#arrow-right"></use>
            </svg>
            <p className="history-card__buy">13,1234 USD</p>
          </li>
          <li className="history-card__item">
            <p className="history-card__date">25.11.2020</p>
            <p className="history-card__sell">1000 RUB</p>
            <svg className="history-card__arrow-icon">
              <use xlinkHref="#arrow-right"></use>
            </svg>
            <p className="history-card__buy">13,1234 USD</p>
          </li>
          <li className="history-card__item">
            <p className="history-card__date">25.11.2020</p>
            <p className="history-card__sell">1000 RUB</p>
            <svg className="history-card__arrow-icon">
              <use xlinkHref="#arrow-right"></use>
            </svg>
            <p className="history-card__buy">13,1234 USD</p>
          </li>
        </ul>
        <button type="button" className="history-card__button">Очистить историю</button>
      </div>
    </section>
  </Fragment>;
};

export default HistoryCard;
