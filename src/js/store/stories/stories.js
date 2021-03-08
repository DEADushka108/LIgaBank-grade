import {extend} from '../../utils/utils';

const initialState = {
  stories: [],
};

const ActionType = {
  UPDATE_STORIES: `UPDATE_STORIES`,
  DELETE_STORIES: `DELETE_SORIES`,
};

const ActionCreator = {
  updateStories: (stories) => ({
    type: ActionType.UPDATE_STORIES,
    payload: stories,
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
        stories: action.payload,
      });
    case ActionType.DELETE_STORIES:
      return extend(state, {
        stories: action.payload,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
