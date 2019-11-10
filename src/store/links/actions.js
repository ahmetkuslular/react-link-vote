import * as ActionTypes from './actionTypes';

export const fetchLinks = params => ({
    type: ActionTypes.FETCH_LINKS,
    params,
});