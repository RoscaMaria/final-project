import React, { useContext, useEffect, useReducer, useState } from "react";
import { Col, Container, Row, Spinner, Card, Button } from "react-bootstrap";
import { DashboardContext } from "../store/Favourites/context";
import {
  addToFavDashboard,
  removeFromFavDashboard,
} from "../store/Favourites/actions";
import { Link } from "react-router-dom";

import RecipeCard from "../components/RecipeCard";

import useFetch from "../hooks/useFetch";

function Home() {
  const { data, loading, error } = useFetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert"
  );
  const { state: dashboardState, dispatch: dashboardDispatch } =
    useContext(DashboardContext);

  const handleAddToDashboard = (recipe) => {
    dashboardDispatch(addToFavDashboard(recipe));
  };

  const handleRemoveFromDashboard = (recipe) => {
    dashboardDispatch(removeFromFavDashboard(recipe));
  };

  const isRecipeInDashboard = (recipe) => {
    return dashboardState.recipes.some((r) => r.idMeal === recipe.idMeal);
  };
  if (loading) return <Spinner />;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <Container>
      <div>
        <h1>Recipes</h1>
      </div>

      <Row>
        {data &&
          data.meals.map((recipe, index) => (
            <Card style={{ width: "400px", mb: "4px" }}>
              <Card.Img variant="top" src={recipe.strMealThumb} alt="/" />
              <Card.Body>
                <Card.Title>{recipe.strMeal}</Card.Title>
                <Link to={`recipe/${recipe.idMeal}`} className="button-link">
                  Go to Recipe
                </Link>

                <Button
                  variant="light"
                  onClick={() => {
                    if (isRecipeInDashboard(recipe))
                      handleRemoveFromDashboard(recipe);
                    else handleAddToDashboard(recipe);
                  }}
                >
                  {isRecipeInDashboard(recipe) ? (
                    <span className="material-symbols-outlined">
                      heart_check
                    </span>
                  ) : (
                    <span className="material-symbols-outlined">favorite</span>
                  )}
                </Button>
              </Card.Body>
            </Card>
          ))}
      </Row>
    </Container>
  );
}

export default Home;
