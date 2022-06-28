import { createSlice } from "@reduxjs/toolkit";

const selectTab = createSlice({
  initialState: "",
  name: "selectTab",
  reducers: {
    tabSelected(state, action) {
      return action.type;
    },
  },
});
export default selectTab.reducer; 
