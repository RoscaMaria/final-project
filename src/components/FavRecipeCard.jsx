import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DashboardContext } from "../store/Favourites/context";
import { addToFavDashboard, removeFromFavDashboard } from "../store/Favourites/actions";
import { Button } from "react-bootstrap";

const FavRecipeCard = (props) => {
  const { strMeal: title, strMealThumb: image, idMeal: recipeId } = props;
  const { state: dashboardState, dispatch: dashboardDispatch } = useContext(DashboardContext);

  const isRecipeInDashboard = (recipe) => dashboardState.recipes.some((r) => r.idMeal === recipe.idMeal);
  

  return (
    <Card style={{ widthMin: "200px", mb: "4px" }} className="recipeCardFav">
        <Row>
            <Col xs={12} sm={6} md={4} lg={3} ><Card.Img variant="left" src={image} alt="/" className="recipeCardPhoto" /></Col>
            <Col >
            <Card.Body className="card-body2">
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
      </Card.Body></Col>
        </Row>
      
      
    </Card>
  );
}

export default FavRecipeCard;