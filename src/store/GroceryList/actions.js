export const ADD_TO_LIST = "ADD_TO_LIST";
export const REMOVE_FROM_LIST = "REMOVE_FROM_LIST";

export const addToList = (ingredient) => ({
    type: ADD_TO_LIST,
    payload: ingredient,
});

export const removeFromList = (ingredient) => ({
    type: REMOVE_FROM_LIST,
    payload: ingredient,
});