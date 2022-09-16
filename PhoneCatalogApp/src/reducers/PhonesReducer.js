import {TYPES} from '@/actions/PhonesActions';

export const PhonesReducer = (state = {}, action) => {
  switch (action.type) {
    case TYPES.SET_PHONELIST:
      return {
        ...state,
        list: action.phoneList,
      };
    default:
      return state;
  }
};
