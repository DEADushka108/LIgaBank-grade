import React, {Fragment} from 'react';

const PromoCard = () => {
  return <Fragment>
    <section className="promo-card">
      <div className="promo-card__wrapper">
        <h2 className="promo-card__title">Лига Банк</h2>
        <p className="promo-card__text">Кредиты на любой случай</p>
        <a className="promo-card__button">Рассчитать кредит</a>
      </div>
    </section>
  </Fragment>;
};

export default PromoCard;
