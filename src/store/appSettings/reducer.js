import { CHANGE_THEME } from './actionTypes';
import { Themes } from 'Constants';

const INITIAL_STATE = {
  theme: Themes.LIGHT,
};

function appSettingsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_THEME:
      const newTheme = state.theme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT;
      return {
        ...state,
        theme: newTheme,
      };
    default:
      return state;
  }
}

export default appSettingsReducer;
