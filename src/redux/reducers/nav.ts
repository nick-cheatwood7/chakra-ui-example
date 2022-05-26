import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type NavOptions = "home" | "dashboard" | "customers" | "people" | "access";

interface NavState {
  current: NavOptions;
}

const initialState: NavState = {
  current: "home",
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setCurrentModule: (state, action: PayloadAction<NavOptions>) => {
      state.current = action.payload;
    },
  },
});

export const { setCurrentModule } = navSlice.actions;
export default navSlice.reducer;
