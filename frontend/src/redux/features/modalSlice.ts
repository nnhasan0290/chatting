import { createSlice } from "@reduxjs/toolkit";

const initialState: {value : boolean} = {value: false};

export const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state) => {
      state.value = true;
    },
    hideModal: (state) => {state.value = false},
  },
});

export const {showModal, hideModal} = ModalSlice.actions

export default ModalSlice.reducer  
