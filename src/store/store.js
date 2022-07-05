import { createStore } from "@reduxjs/toolkit";
import { SELECTEDCATEGORIES, ALLCATEGORIES, SETCURRENCY, ALLCURRENCY } from "./types";

const initialState = {
  categories: [],
  selectedCategory: "Women",
  setCurency: false,
  allCurrency: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ALLCATEGORIES:
      return { ...state, categories: [...state.categories, ...action.payload] };
    case SELECTEDCATEGORIES:
      console.log(action.payload);
      return { ...state, selectedCategory: action.payload };

    case SETCURRENCY:
      return { ...state, setCurency: !state.setCurency };
    case ALLCURRENCY:
      return {...state, allCurrency: [...state.allCurrency, action.payload]}
    default:
      return state;
  }
};

export const store = createStore(reducer);
