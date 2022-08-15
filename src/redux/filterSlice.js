import { createSlice } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    change(state, action) {
      state = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { change } = filterSlice.actions;

export const getFilter = state => state.filter;

export const useFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const filterChange = value => dispatch(change(value));

  return {
    filter,
    change: filterChange,
  };
};
