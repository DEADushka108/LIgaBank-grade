import React, {Fragment, PureComponent} from 'react';
import {connect} from 'react-redux';
import {getStories} from '../../store/stories/selector';
import {ActionCreator as StoriesAction} from '../../store/stories/stories';

class HistoryCard extends PureComponent {
  constructor(props) {
    super(props);

    this._handleStoryClear = this._handleStoryClear.bind(this);
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps, this.props);
  }

  _handleStoryClear() {
    const {deleteStory} = this.props;
    deleteStory();
  }

  render() {
    const {stories} = this.props;
    return <Fragment>
    <section className="page-main history-card">
      <h2 className="history-card__title">История конвертаций</h2>
      <div className="history-card__wrapper">
        <ul className="history-card__list">
          {stories.map((story, index) => {
            const {date, sellAmount, sellCode, buyAmount, buyCode} = story;
            return <li key={index} className="history-card__item">
            <p className="history-card__date">{date}</p>
            <p className="history-card__sell">{sellAmount} {sellCode}</p>
            <svg className="history-card__arrow-icon">
              <use xlinkHref="#arrow-right"></use>
            </svg>
            <p className="history-card__buy">{buyAmount} {buyCode}</p>
          </li>
          })}
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
      <button type="button" className="history-card__button" onClick={(evt) => {
        evt.preventDefault();
        this._handleStoryClear();
      }}>Очистить историю</button>
    </section>
  </Fragment>;
  }

};

// const mapStateToProps = (state) => ({
//   stories: getStories(state),
// });

const mapDispatchToProps = (dispatch) => ({
  deleteStory() {
    dispatch(StoriesAction.deleteStories());
  },
});

export {HistoryCard}
export default connect(null, mapDispatchToProps)(HistoryCard);
