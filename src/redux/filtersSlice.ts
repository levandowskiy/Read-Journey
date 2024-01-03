import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    title: "",
    author: "",
  },
  reducers: {
    setFilter: (state, action) => {
      state.title = action.payload.inputTitleValue || "";
      state.author = action.payload.inputAuthorValue || "";
    },
  },
});

export const filtersSliceReducers = filtersSlice.reducer;
export const { setFilter } = filtersSlice.actions;
