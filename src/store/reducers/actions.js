import {
  ALLCATEGORIES,
  SELECTEDCATEGORIES,
  SETCURRENCY,
  ALLCURRENCY,
} from "../types";
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
};

export const selectCurency = () => {
  return {
    type: SETCURRENCY,
  };
};

export const allCurrency = (data) => {
  return {
    type: ALLCURRENCY,
    payload: data,
  };
};
