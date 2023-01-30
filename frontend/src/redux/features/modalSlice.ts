import { createSlice } from "@reduxjs/toolkit";

const initialState: { value: boolean; canvas: boolean } = {
  value: false,
  canvas: false,
};

export const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state) => {
      state.value = true;
    },
    hideModal: (state) => {
      state.value = false;
    },
    showOffCanvas: (state) => {
      state.canvas = true;
    },
    hideCanvas: (state) => {
      state.canvas = false;
    },
  },
});

export const { showModal, hideModal, showOffCanvas, hideCanvas } =
  ModalSlice.actions;

export default ModalSlice.reducer;
