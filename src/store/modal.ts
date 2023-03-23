import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  active: boolean;
  children: JSX.Element | null;
}

const initialState: ModalState = {
  active: false,
  children: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    open: (state, action: PayloadAction<JSX.Element>) => {
      state.active = true;
      state.children = action.payload;
    },
    close: state => {
      state.active = false;
      state.children = null;
    },
  },
});

export const { open, close } = modalSlice.actions;
export default modalSlice.reducer;
