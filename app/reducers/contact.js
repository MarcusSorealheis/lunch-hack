import {
  PATCH_CONTACT,
} from '../constants/ActionTypes';

const STATES = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
  'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois',
  'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Montana', 'Nebraska',
  'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina',
  'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Maryland', 'Massachusetts', 'Michigan',
  'Minnesota', 'Mississippi', 'Missouri', 'Pennsylvania', 'Rhode Island', 'South Carolina',
  'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington',
  'West Virginia', 'Wisconsin', 'Wyoming',
];
const initialState = {
  address: {
    hasNone: false,
    line1: '',
    line2: '',
    city: '',
    state: null,
    states: STATES,
    zipcode: '',
  },
  phone: {
    hasNone: false,
    number: '',
  },
  email: {
    hasNone: false,
    address: '',
  },
};

export default function contact(state = initialState, action) {
  switch (action.type) {
    case PATCH_CONTACT:
      return {
        ...state,
        ...action.patch,
      };
    default:
      return state;
  }
}
