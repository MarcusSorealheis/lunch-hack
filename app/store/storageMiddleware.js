import * as storage from 'redux-storage';
import createEngine from 'redux-storage-engine-localstorage';
import {} from '../constants/ActionTypes';

const blackListedActions = [
  '@@router/LOCATION_CHANGE',
];

const engine = createEngine('seed');
const storageMiddleware = storage.createMiddleware(engine, blackListedActions);

export { storage, engine, storageMiddleware };
