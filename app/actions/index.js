import * as types from '../constants/ActionTypes';

export function addChild() {
  return { type: types.ADD_CHILD };
}

export function updateChild(index, update) {
  return { type: types.SET_PROP, index, update };
}
