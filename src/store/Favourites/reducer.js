import { ADD_TO_FAV, REMOVE_FROM_FAV } from "./actions";

export const initialDashboardState = {
  recipes: [],
};

export const dashboardReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_FAV:
      return {
        ...state,
        recipes: [...state.recipes, action.payload],
      };

    case REMOVE_FROM_FAV:
      return {
        ...state,
        recipes: state.recipes.filter((recipe) => recipe !== action.payload),
      };

    default:
      return state;
  }
};
