import React, {Fragment, PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator as StoriesAction} from '../../store/stories/stories';
import {getStories} from '../../store/stories/selector';

class HistoryCard extends PureComponent {
  constructor(props) {
    super(props);

    this._handleStoryClear = this._handleStoryClear.bind(this);
  }

  _handleStoryClear() {
    const {deleteStory} = this.props;
    deleteStory();
  }

  render() {
    const {stories} = this.props;
    return <Fragment>
      <div className="converter__history-card history-card">
        <h3 className="history-card__title">История конвертаций</h3>
        <div className="history-card__wrapper">
          <ul className="history-card__list">
            {stories.slice(0, 5).map((story, index) => {
              const {date, sellAmount, sellCode, buyAmount, buyCode} = story;
              return <li key={index} className="history-card__item">
                <p className="history-card__date">{date}</p>
                <p className="history-card__sell">{sellAmount} {sellCode}</p>
                <svg className="history-card__arrow-icon">
                  <use xlinkHref="#arrow-right"></use>
                </svg>
                <p className="history-card__buy">{buyAmount} {buyCode}</p>
              </li>;
            })}
          </ul>
          {stories.length > 5 && <ul className="history-card__list">
            {stories.slice(5, 10).map((story, index) => {
              const {date, sellAmount, sellCode, buyAmount, buyCode} = story;
              return <li key={index} className="history-card__item">
                <p className="history-card__date">{date}</p>
                <p className="history-card__sell">{sellAmount} {sellCode}</p>
                <svg className="history-card__arrow-icon">
                  <use xlinkHref="#arrow-right"></use>
                </svg>
                <p className="history-card__buy">{buyAmount} {buyCode}</p>
              </li>;
            })}
          </ul>}
        </div>
        <button type="button" className="history-card__button" onClick={(evt) => {
          evt.preventDefault();
          this._handleStoryClear();
        }}>Очистить историю</button>
      </div>
    </Fragment>;
  }
}

HistoryCard.propTypes = {
  stories: PropTypes.array.isRequired,
  deleteStory: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  stories: getStories(state),
});

const mapDispatchToProps = (dispatch) => ({
  deleteStory() {
    dispatch(StoriesAction.deleteStories());
  },
});

export {HistoryCard};
export default connect(mapStateToProps, mapDispatchToProps)(HistoryCard);
