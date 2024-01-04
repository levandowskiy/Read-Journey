import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    title: '',
    author: '',
    status: 'All books',
  },
  reducers: {
    setFilter: (state, action) => {
      state.title = action.payload.inputTitleValue || '';
      state.author = action.payload.inputAuthorValue || '';
    },
    secondFilter: (state, action) => {
      state.status = action.payload
    },
  },
});

export const filtersSliceReducers = filtersSlice.reducer;
export const { setFilter, secondFilter } = filtersSlice.actions;
