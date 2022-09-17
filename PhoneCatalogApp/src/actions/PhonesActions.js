export const TYPES = {
  SET_PHONELIST: 'SET_PHONELIST',
  ADD_PHONE: 'ADD_PHONE',
  UPDATE_PHONE: 'UPDATE_PHONE',
  DELETE_PHONE: 'DELETE_PHONE',
};

export const setPhoneList = phoneList => ({
  type: TYPES.SET_PHONELIST,
  phoneList: phoneList,
});

export const addPhone = phone => ({
  type: TYPES.ADD_PHONE,
  phone: phone,
});
export const updatePhone = phone => ({
  type: TYPES.UPDATE_PHONE,
  phone: phone,
});

export const deletePhone = id => ({
  type: TYPES.DELETE_PHONE,
  id: id,
});
