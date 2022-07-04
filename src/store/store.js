import { createStore } from "@reduxjs/toolkit";
// import { selectedCategories } from "./reducers/actions";
import { SELECTEDCATEGORIES, ALLCATEGORIES } from "./types";

const initialState = {
  categories: [],
  selectedCategory: "Women",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ALLCATEGORIES:
      return { ...state, categories: [...state.categories, ...action.payload] };
    case SELECTEDCATEGORIES:
      console.log(action.payload);
      return { ...state, selectedCategory: action.payload };
    default:
      return state;
  }
};

export const store = createStore(reducer);
