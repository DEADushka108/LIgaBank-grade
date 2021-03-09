import {extend} from '../../utils/utils';

const initialState = {
  stories: [],
};

const ActionType = {
  UPDATE_STORIES: `UPDATE_STORIES`,
  DELETE_STORIES: `DELETE_SORIES`,
};

const ActionCreator = {
  updateStories: (story) => ({
    type: ActionType.UPDATE_STORIES,
    payload: story,
  }),
  deleteStories: () => ({
    type: ActionType.DELETE_STORIES,
    payload: [],
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.UPDATE_STORIES:
      return extend(state, {
        stories: [action.payload, ...state.stories].slice(0, 10),
      });
    case ActionType.DELETE_STORIES:
      return extend(state, {
        stories: action.payload,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
