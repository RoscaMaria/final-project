import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import "./RecipeCard.css";
import { DashboardContext } from "../store/Favourites/context";
import { addToFavDashboard, removeFromFavDashboard } from "../store/Favourites/actions";
import { Button } from "react-bootstrap";

const RecipeCard = (props) => {
  const { strMeal: title, strMealThumb: image, idMeal: recipeId } = props;
  const { state: dashboardState, dispatch: dashboardDispatch } = useContext(DashboardContext);

  const isRecipeInDashboard = (recipe) => dashboardState.recipes.some((r) => r.idMeal === recipe.idMeal);
  

  return (
    <Card style={{height: "410px"  }} className="recipeCard">
      <Card.Img variant="top" src={image} alt="/" className="recipeCardPhoto" style={{width: "100%"}} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Link to={`recipe/${recipeId}`} className="button-link">
          Go to Recipe
        </Link>
       

        <Button
          variant="light"
          onClick={() => {
            if (isRecipeInDashboard(props)) {
              dashboardDispatch(removeFromFavDashboard(props));
              return;
            }

            dashboardDispatch(addToFavDashboard(props));
          }}
        >
          <span className="material-symbols-outlined">
            {isRecipeInDashboard(props) ? "heart_check" : "favorite"}
          </span>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default RecipeCard;