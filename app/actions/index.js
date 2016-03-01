import * as types from '../constants/ActionTypes';

export function addChild() {
  return { type: types.ADD_CHILD };
}

export function removeChild() {
  return { type: types.REMOVE_CHILD };
}

export function updateChild(index, update) {
  return { type: types.SET_PROP, index, update };
}

export function addAdult() {
  return { type: types.ADD_ADULT_TO_HOUSEHOLD };
}

export function removeAdult() {
  return { type: types.REMOVE_ADULT_FROM_HOUSEHOLD };
}

export function updateHousehold(patch) {
  return { type: types.PATCH_HOUSEHOLD, patch };
}

export function updateHouseholdAdult(index, patch) {
  return { type: types.PATCH_HOUSEHOLD_ADULT, index, patch };
}

export function updateContact(patch) {
  return { type: types.PATCH_CONTACT, patch };
}
