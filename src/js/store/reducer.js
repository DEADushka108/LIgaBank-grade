import {combineReducers} from 'redux';
import {reducer as currencies} from './currencies/currencies';
import {reducer as stories} from './stories/stories';
import NameSpace from './name-space';

export default combineReducers({
  [NameSpace.CURRENCIES]: currencies,
  [NameSpace.STORIES]: stories,
});
