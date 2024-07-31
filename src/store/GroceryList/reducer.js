import { ADD_TO_LIST, REMOVE_FROM_LIST } from "./actions";

export const initialListState = {
  ingredients: [],
};

export const listReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_LIST:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      };

    case REMOVE_FROM_LIST:
      return {
        ...state,
        ingredients: state.ingredients.filter(({ ingredient }) => ingredient !== action.payload),
      };

    default:
      return state;
  }
};
