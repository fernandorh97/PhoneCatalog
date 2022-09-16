export const TYPES = {
  SET_PHONELIST: 'SET_PHONELIST',
};

export const setPhoneList = phoneList => ({
  type: TYPES.SET_PHONELIST,
  phoneList: phoneList,
});
