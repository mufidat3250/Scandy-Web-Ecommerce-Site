import { configureStore } from "@reduxjs/toolkit";
import selectTab from "./reducers/selectedItem";
export const store = configureStore({
  reducer: {
    selectTab: selectTab,
  },
});
