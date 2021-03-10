import React, {Fragment, PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator as StoriesAction} from '../../store/stories/stories';
import {getStories} from '../../store/stories/selector';
import {ColumnQuantity} from '../../utils/const';
import HistoryList from '../history-list/history-list';

class HistoryCard extends PureComponent {
  constructor(props) {
    super(props);

    this._handleStoryClear = this._handleStoryClear.bind(this);
  }

  _handleStoryClear() {
    const {onStoriesDelete} = this.props;
    onStoriesDelete();
  }

  render() {
    const {stories} = this.props;
    return <Fragment>
      <div className="converter__history-card history-card">
        <h3 className="history-card__title">История конвертаций</h3>
        <div className="history-card__wrapper">
          <HistoryList stories={stories.slice(ColumnQuantity.FIRST.START, ColumnQuantity.FIRST.END)}/>
          {stories.length > ColumnQuantity.FIRST.END && <HistoryList stories={stories.slice(ColumnQuantity.SECOND.START, ColumnQuantity.SECOND.END)}/>}
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
  onStoriesDelete: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  stories: getStories(state),
});

const mapDispatchToProps = (dispatch) => ({
  onStoriesDelete() {
    dispatch(StoriesAction.deleteStories());
  },
});

export {HistoryCard};
export default connect(mapStateToProps, mapDispatchToProps)(HistoryCard);
