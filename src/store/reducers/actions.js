import { ALLCATEGORIES, SELECTEDCATEGORIES } from "../types";
export const selectedCategories = (data) => {
  console.log(data);
  return {
    type: ALLCATEGORIES,
    payload: data,
  };
};

export const changeCategories = (data) => {
    console.log(data);
    return {
      type: SELECTEDCATEGORIES,
      payload: data,
    };
  }