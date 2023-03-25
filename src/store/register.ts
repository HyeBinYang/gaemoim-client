import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RegisterInput {
  type: "1" | "2";
  title: string;
  content: string;
}

interface RegisterState {
  input: RegisterInput;
}

const initialState: RegisterState = {
  input: {
    type: "1",
    title: "",
    content: "",
  },
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setInput(state, action: PayloadAction<{ name: keyof RegisterInput; value: any }>) {
      const { name, value } = action.payload;
      state.input = { ...state.input, [name]: value };
    },
  },
});

export const { setInput } = registerSlice.actions;
export default registerSlice.reducer;
