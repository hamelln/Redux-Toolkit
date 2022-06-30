import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface ColorState {
  value: string;
}

const initialState: ColorState = {
  value: "red",
};

export const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    changeBlue: (state) => {
      state.value = "blue";
    },
    changeBlack: (state) => {
      state.value = "black";
    },
  },
});

export const { changeBlue, changeBlack } = colorSlice.actions;

export const selectColor = (state: RootState) => state.color.value;

export default colorSlice.reducer;
