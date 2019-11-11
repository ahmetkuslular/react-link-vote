import {
  ADD_NEW_LINK,
  FETCH_LINKS,
  VOTE_LINK,
  DELETE_LINK,
  SORT_LINKS,
  CHANGE_PAGE,
} from './actionTypes';
import { sortLinks, addLink, voteLink, deleteLink, changePage, fetchLinks } from './helpers';

const INITIAL_STATE = {
  data: [],
  totalItems: 0,
  loading: false,
  orderBy: 'lastAdded',
  perPage: 5,
  currentPage: 1,
};

function linksReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_LINKS:
      return fetchLinks(state, action);
    case SORT_LINKS:
      return sortLinks(state, action);
    case CHANGE_PAGE:
      return changePage(state, action);
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
