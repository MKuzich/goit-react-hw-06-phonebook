import { createSlice } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';

const contactsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter(contact => contact.id !== action.payload.id);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { add, remove } = contactsSlice.actions;

export const getContacts = state => state.items;

export const useContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const handleAddContact = value => dispatch(add(value));
  const handleRemoveContact = value => dispatch(remove(value));

  return {
    contacts,
    add: handleAddContact,
    remove: handleRemoveContact,
  };
};
