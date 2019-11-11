import { ADD_NEW_LINK, FETCH_LINKS, VOTE_LINK, DELETE_LINK, SORT_LINKS } from './actionTypes';
import { sortLinks, addLink, voteLink, deleteLink } from './helpers';

const INITIAL_STATE = {
  data: [],
  loading: false,
  orderBy: 'lastAdded',
};

function linksReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_LINKS:
      return { ...state };
    case SORT_LINKS:
      return sortLinks(state, action);
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

export default linksReducer;
