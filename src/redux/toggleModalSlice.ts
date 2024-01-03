import { createSlice } from '@reduxjs/toolkit';

const toggleModalSlice = createSlice({
  name: 'toggleModal',
  initialState: {
    showModal: false,
  },
  reducers: {
    openModal: (state) => {
      state.showModal = true;
    },
    closeModal: (state) => {
      state.showModal = false;
    },
  },
});

export const toggleModalReducer = toggleModalSlice.reducer;
export const { openModal, closeModal } = toggleModalSlice.actions;
