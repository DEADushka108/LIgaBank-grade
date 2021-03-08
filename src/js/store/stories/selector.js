import NameSpace from '../name-space';

const getStories = (state) => {
  return state[NameSpace.STORIES].stories;
}

export {getStories};
