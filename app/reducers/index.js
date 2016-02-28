import { combineReducers } from 'redux';
import { LOAD } from 'redux-storage';
import { routerReducer } from 'react-router-redux';
// import partialReducer from './partialReducer';

function reduxStorage(state = { loaded: false }, action) {
  console.log(action)
  switch (action.type) {
    case LOAD:
      return { ...state, loaded: true };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  reduxStorage,
  // partialReducer,
  routing: routerReducer,
});

export default rootReducer;
