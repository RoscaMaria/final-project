import React, { useContext } from "react";
import { DashboardContext } from "../store/Favourites/context";

export default function Favourites() {
  const { state: dashboardState, dispatch: dashboardDispatch } =
    useContext(DashboardContext);

  
  console.log("dashboard state", dashboardState);

  if (!dashboardState || !dashboardState.recipes) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <p>Favourites {`(${dashboardState.recipes.length})`}</p>
      {dashboardState.recipes.length === 0 ? (
        <p>You have no favourites</p>
      ) : (
        <ul>
          {dashboardState.recipes.map((recipe) => {
            return <li   key={recipe.idMeal}  > {recipe.strMeal} </li>;
          })}
        </ul>
      )}
    </>
  );
}
