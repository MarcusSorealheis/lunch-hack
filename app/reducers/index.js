import { combineReducers } from 'redux';
import { LOAD } from 'redux-storage';
import { routerReducer } from 'react-router-redux';
import children from './children';

function reduxStorage(state = { loaded: false }, action) {
  switch (action.type) {
    case LOAD:
      return { ...state, loaded: true };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  reduxStorage,
  children,
  routing: routerReducer,
});

export default rootReducer;
