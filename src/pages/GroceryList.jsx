import React from "react";
import { ListContext } from "../store/GroceryList/context";
import { useContext } from "react";
import { addToList, removeFromList } from "../store/GroceryList/actions";

export default function GroceryListPage () {
    const {state: listState, dispatch: listDispatch} = useContext(ListContext);
    return (
        <>
        <p>grocery list page</p>
        {listState.ingredients.length === 0 ? (
            <h3>No ingredients added to the grocery list!</h3>
        ) : (
        <div>
            {listState.ingredients.map((ingredient, index) => (
                <>
        
                <li key={index} style={{listStyle: 'none'}}>
            <label for="ingredient-checkbox">
              <input
                id="ingredient-checkbox"
                type="checkbox"
                checked={listState.ingredients.includes(ingredient)}
                onChange={() => {
                  if(listState.ingredients.includes(ingredient)){
                    listDispatch(removeFromList(ingredient));
                    return;
                  } listDispatch(addToList(ingredient));
                }
               } 
              />
              {ingredient}
            </label>
          </li>

                </>
            ))}
            <p> huraay you added ingredients!</p>
            </div>
            
        )}
        </>
        
    );
}