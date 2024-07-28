import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spinner, Container, Row, Col, Image } from "react-bootstrap";

import { style } from "react-bootstrap";

import useFetch from "../hooks/useFetch";

function Recipe() {
  const { recipeId } = useParams();

  const { data, loading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
  );

  console.log(data);
  if (loading) return <Spinner />;

  if (error) return <div>Error: {error.message}</div>;

  if (!data || !data.meals) {
    return <div>No recipe found</div>;
  }

  const recipe = data.meals[0];

  const getIngredients = (recipe) => {
    let ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];
      if (ingredient) {
        ingredients.push(`${measure} ${ingredient}`);
      }
    }
    return ingredients;
  };

  const ingredients = getIngredients(recipe);
  console.log(ingredients);
  console.log(ingredients[1]);
  const ingredients2 = Object.entries(ingredients);
  console.log(ingredients2[1]);

  return (

    <Container>
      <Row>
        <h1>{recipe.strMeal}</h1>
        <Col sm={5}>
        <Image src={recipe.strMealThumb} style={{width: '100%'}} rounded />
        </Col>
        <Col sm={6}>
        <h3> Ingredients</h3>
        {
          ingredients.map((ingredient, index) => (
            <p>{ingredient}</p>
          ))
        }
        </Col>
      </Row>
      <Row>
        <Col>
        <p>{recipe.strInstructions}</p>
        </Col>
        </Row>
    </Container>
  


  );
}

export default Recipe;
