import * as ActionTypes from './actionTypes';

export const fetchLinks = params => ({
  type: ActionTypes.FETCH_LINKS,
  params,
});

export const addNewLink = params => ({
  type: ActionTypes.ADD_NEW_LINK,
  params
});
