import { ADD_NEW_LINK, FETCH_LINKS, VOTE_LINK, DELETE_LINK } from './actionTypes';

const INITIAL_STATE = {
  data: [],
  loading: false,
};

function linksReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_LINKS:
      return { ...state };
    case ADD_NEW_LINK:
      return addLink(state, action);
    case VOTE_LINK:
      return voteLink(state, action);
    case DELETE_LINK:
      return deleteLink(state, action);
    default:
      return state;
  }
}

function addLink(state, action) {
  const data = [...state.data, action.params];

  return { ...state, data };
}

function voteLink(state, action) {
  const data = [...state.data];
  const link = action.params.link;
  const voteType = action.params.voteType;
  data.find(item => {
    if (item.id === link.id) {
      if (voteType === 'up') item.points++;
      else if (item.points > 0) {
        item.points--;
      }
      return true;
    }
  });

  return { ...state, data };
}

function deleteLink(state, action) {
  const temp = [...state.data];
  const link = action.params;
  const data = temp.filter(item => {
    return item.id !== link.id;
  });

  return { ...state, data };
}

export default linksReducer;
