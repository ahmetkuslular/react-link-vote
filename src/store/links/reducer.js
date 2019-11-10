import {
  FETCH_LINKS,
} from './actionTypes';
import linkData from './data';

const INITIAL_STATE = {
  data: linkData,
  loading: false,
};

function linksReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_LINKS:
      return {
        ...state,
        data: linkData,
        loading: false,
      };

    default:
      return state;
  }
}

export default linksReducer;
