import {
  ADD_CHILD,
  REMOVE_CHILD,
  SET_PROP,
} from '../constants/actionTypes';

const emptyChild = {
  name: {
    first: '',
    middle: '',
    last: '',
  },
  student: null,
  status: {
    Runaway: false,
    Migrant: false,
    Homeless: false,
    'Head start': false,
    Foster: false,
  },
  hispanic: null,
  ethnicity: {
    'Native Hawaiin or Other Pacific Islander': false,
    Asian: false,
    White: false,
    'Black or African American': false,
    'American Indian or Alaskan Native': false,
  },
};
const initialState = [emptyChild];

export default function children(state = initialState, action) {
  switch (action.type) {
    case ADD_CHILD:
      return [
        ...state,
        emptyChild,
      ];
    case REMOVE_CHILD:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
      ];
    case SET_PROP:
      return [
        ...state.slice(0, action.index),
        {
          ...state[action.index],
          ...action.update,
        },
        ...state.slice(action.index + 1),
      ];
    default:
      return state;
  }
}
