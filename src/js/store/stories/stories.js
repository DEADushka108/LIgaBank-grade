import {extend} from '../../utils/utils';

const initialState = {
  stories: [],
};

const ActionType = {
  UPDATE_STORIES: `UPDATE_STORIES`,
};

const ActionCreator = {
  updateStories: (stories) => ({
    type: ActionType.UPDATE_STORIES,
    payload: stories,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.UPDATE_STORIES:
      return extend(state, {
        stories: action.payload,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
