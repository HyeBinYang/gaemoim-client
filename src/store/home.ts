import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type HomeTabType = "all" | "project" | "study";

interface HomeState {
  tab: HomeTabType;
  onlyRecruiting: boolean;
}

const initialState: HomeState = {
  tab: "all",
  onlyRecruiting: true,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setTab(state, action: PayloadAction<HomeTabType>) {
      state.tab = action.payload;
    },
    toggleOnlyRecruiting(state) {
      state.onlyRecruiting = !state.onlyRecruiting;
    },
  },
});

export const { setTab, toggleOnlyRecruiting } = homeSlice.actions;
export default homeSlice.reducer;
