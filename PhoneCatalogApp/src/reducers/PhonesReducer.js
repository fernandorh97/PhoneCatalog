import {TYPES} from '@/actions/PhonesActions';

export const PhonesReducer = (state = {}, action) => {
  switch (action.type) {
    case TYPES.SET_PHONELIST:
      return {
        ...state,
        list: action.phoneList,
      };
    case TYPES.ADD_PHONE: {
      const newList = [...state.list, action.phone];
      return {
        ...state,
        list: newList,
      };
    }
    case TYPES.UPDATE_PHONE: {
      const newList = [...state.list];
      const index = newList.findIndex(x => x.id === action.phone.id);
      newList.splice(index, 1, action.phone);
      return {
        ...state,
        list: newList,
      };
    }
    case TYPES.DELETE_PHONE: {
      const newList = [...state.list];
      const index = newList.findIndex(x => x.id === action.id);
      newList.splice(index, 1);
      return {
        ...state,
        list: newList,
      };
    }
    default:
      return state;
  }
};
