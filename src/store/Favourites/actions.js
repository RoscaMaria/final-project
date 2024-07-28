export const ADD_TO_FAV = "ADD_TO_FAV";
export const REMOVE_FROM_FAV = "REMOVE_FROM_FAV";

export const addToFavDashboard = (recipe) => ({
    type: ADD_TO_FAV,
    payload: recipe,
});

export const removeFromFavDashboard = (recipe) => ({
    type: REMOVE_FROM_FAV,
    payload: recipe,
});