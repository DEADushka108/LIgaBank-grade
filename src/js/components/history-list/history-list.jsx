import React from 'react';
import PropTypes from 'prop-types';

const HistoryList = (props) => {
  const {stories} = props;
  return <ul className="history-card__list">
    {stories.map((story, index) => {
      const {date, sellAmount, sellCode, buyAmount, buyCode} = story;
      return <li key={index} className="history-card__item">
        <p className="history-card__date">{date}</p>
        <p className="history-card__sell">{sellAmount} {sellCode}</p>
        <svg width="50px" height="16px" className="history-card__arrow-icon">
          <use xlinkHref="#arrow-right"></use>
        </svg>
        <p className="history-card__buy">{buyAmount} {buyCode}</p>
      </li>;
    })}
  </ul>;
};

HistoryList.propTypes = {
  stories: PropTypes.array.isRequired,
};

export default HistoryList;
