import * as storage from 'redux-storage';
import createEngine from 'redux-storage-engine-localstorage';
import debounce from 'redux-storage-decorator-debounce';
import filter from 'redux-storage-decorator-filter';
import {} from '../constants/actionTypes';

const blackListedActions = [
  '@@router/LOCATION_CHANGE',
  '@@router/CALL_HISTORY_METHOD',
];
let engine = createEngine('seed');
engine = filter(engine, [
  'reduxStorage',
  'children',
  'contact',
  'household',
], ['routing']);
engine = debounce(engine, 400);
const storageMiddleware = storage.createMiddleware(engine, blackListedActions);

export { storage, engine, storageMiddleware };
