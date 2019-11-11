import * as ActionTypes from './actionTypes';

export const fetchLinks = params => ({
  type: ActionTypes.FETCH_LINKS,
  params,
});

export const addNewLink = params => ({
  type: ActionTypes.ADD_NEW_LINK,
  params,
});

export const deleteLink = params => ({
  type: ActionTypes.DELETE_LINK,
  params,
});

export const voteLink = params => ({
  type: ActionTypes.VOTE_LINK,
  params,
});


export const sortLinks = params => ({
  type: ActionTypes.SORT_LINKS,
  params,
});