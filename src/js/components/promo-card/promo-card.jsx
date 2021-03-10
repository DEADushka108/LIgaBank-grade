import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../utils/const';

const PromoCard = () => {
  return <Fragment>
    <section className="promo-card">
      <div className="promo-card__wrapper">
        <h2 className="promo-card__title">Лига Банк</h2>
        <p className="promo-card__text">Кредиты на любой случай</p>
        <Link to={AppRoute.CREDIT} className="promo-card__button">Рассчитать кредит</Link>
        <div className="promo-card__card-images">
          <img className="promo-card__black-card" src="./img/bg/black-card.png" alt="black-card"/>
          <img className="promo-card__white-card" src="./img/bg/white-card.png" alt="white-card"/>
        </div>
        <div className="promo-card__square-left"></div>
        <div className="promo-card__square-right"></div>
      </div>
    </section>
  </Fragment>;
};

export default PromoCard;
