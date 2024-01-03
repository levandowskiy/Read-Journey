import { configureStore } from '@reduxjs/toolkit';
import { toggleModalReducer } from './toggleModalSlice';
import { booksSliceReducers } from './booksSlice';
import { filtersSliceReducers } from './filtersSlice';

const store = configureStore({
  reducer: {
    modal: toggleModalReducer,
    books: booksSliceReducers,
    filters: filtersSliceReducers,
  },
});

export default store;
