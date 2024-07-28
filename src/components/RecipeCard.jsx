import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import "./RecipeCard.css";
import { DashboardContext } from "../store/Favourites/context";
import { addToFavDashboard, removeFromFavDashboard } from "../store/Favourites/actions";
import { Button } from "react-bootstrap";

export default function RecipeCard(props) {
  const { title, image, recipeId, recipe } = props;
  const {state: dashboardState, dispatch: dashboardDispatch} = useContext(DashboardContext);

  

  const handleAddToDashboard = (recipe) => {
    dashboardDispatch(addToFavDashboard(recipe));
  }

  const handleRemoveFromDashboard = (recipe) => {
    dashboardDispatch(removeFromFavDashboard(recipe));
  }


  return (
    <Card style={{ width: "400px", mb: "4px" }}>
      <Card.Img variant="top" src={image} alt="/" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Link to={`recipe/${recipeId}`} className="button-link">
          Go to Recipe
        </Link>
       {/*  <Button onClick={handleAddToDashboard}> click to add to favorites</Button> */}
       {/*  <span onClick={() => {
          if(dashboardState.recipes.includes(recipe))
            handleRemoveFromDashboard();
          else handleAddToDashboard();
        }} class="material-symbols-outlined">favorite</span> */}

        <Button variant={dashboardState}
        onClick={() => {
          if(dashboardState.recipes.includes(recipe))
            handleRemoveFromDashboard(recipe);
          else handleAddToDashboard(recipe);
        }}>
          {dashboardState.recipes.includes(recipe) ? (<span class="material-symbols-outlined"> heart_check</span>) : (<span class="material-symbols-outlined">
favorite
</span>)}
        </Button>
      </Card.Body>
    </Card>
  );
}
