import { createSlice } from '@reduxjs/toolkit';

const toggleModalSlice = createSlice({
  name: 'toggleModal',
  initialState: {
    showModal: false,
    currentBook: null,
  },
  reducers: {
    openModal: (state) => {
      state.showModal = true;
    },
    closeModal: (state) => {
      state.showModal = false;
    },
    setCurrentBook: (state, action) => {         
      state.currentBook = action.payload;
    }
  },
});

export const toggleModalReducer = toggleModalSlice.reducer;
export const { openModal, closeModal, setCurrentBook } = toggleModalSlice.actions;
