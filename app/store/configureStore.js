import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { storage, engine, storageMiddleware } from './storageMiddleware';
// import mixpanelMiddleware from './mixpanelMiddleware';
import rootReducer from '../reducers';

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  // mixpanelMiddleware,
  storageMiddleware,
)(createStore);

export const store = createStoreWithMiddleware(storage.reducer(rootReducer));
export const load = storage.createLoader(engine);
