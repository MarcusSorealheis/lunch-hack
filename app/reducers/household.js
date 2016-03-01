import {
  ADD_ADULT_TO_HOUSEHOLD,
  PATCH_HOUSEHOLD,
  PATCH_HOUSEHOLD_ADULT,
} from '../constants/ActionTypes';

const emptyAdult = {
  name: {
    first: '',
    middle: '',
    last: '',
  },
  earnings: {
    hasNone: false,
    total: 0,
    type: 2,
    types: ['weekly', 'bi-monthly', 'monthly', 'annually']
  },
  publicAssistance: {
    hasNone: false,
    total: 0,
    type: 2,
    types: ['weekly', 'bi-monthly', 'monthly', 'annually']
  },
  otherIncome: {
    hasNone: false,
    total: 0,
    type: 2,
    types: ['weekly', 'bi-monthly', 'monthly', 'annually']
  },
};
const initialState = {
  snap: false,
  caseNumber: '',
  SSN: {
    hasNone: false,
    last4: '',
  },
  childIncome: {
    hasNone: false,
    total: 0,
    type: 2,
    types: ['weekly', 'bi-monthly', 'monthly', 'annually']
  },
  adults: [
    emptyAdult
  ],
};

export default function household(state = initialState, action) {
  switch (action.type) {
    case ADD_ADULT_TO_HOUSEHOLD:
      return {
        ...state,
        adults: [
          ...state.adults,
          emptyAdult,
        ],
      };
    case PATCH_HOUSEHOLD:
      return {
        ...state,
        ...action.patch,
      };
    case PATCH_HOUSEHOLD_ADULT:
      return {
        ...state,
        adults: [
          ...state.adults.slice(0, action.index),
          {
            ...state.adults[action.index],
            ...action.patch,
          },
          ...state.adults.slice(action.index + 1),
        ]
      };
    default:
      return state;
  }
}
