import { ADD_NEW_LINK, FETCH_LINKS } from './actionTypes';

const INITIAL_STATE = {
  data: [],
  loading: false,
};

function linksReducer(state = INITIAL_STATE, action) {

  switch (action.type) {
    case FETCH_LINKS:
      return {
        ...state,
      };
    case ADD_NEW_LINK:
      return {
        ...state,
        data: [...state.data, action.params],
      };
    default:
      return state;
  }
}

export default linksReducer;
