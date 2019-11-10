import { combineReducers } from 'redux';

import links from './links/reducer';
import appSettings from './appSettings/reducer';

export default combineReducers({
  links,
  appSettings,
});
