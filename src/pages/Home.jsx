import React, { useContext, useEffect, useReducer, useState } from "react";
import { Col, Container, Row, Spinner, Card } from "react-bootstrap";

import RecipeCard from "../components/RecipeCard";

import useFetch from "../hooks/useFetch";


function Home () {

  const {
    data,
    loading,
    error
  } = useFetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert"
  );

  console.log(data);
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
            <RecipeCard image={recipe.strMealThumb} title={recipe.strMeal} recipeId={recipe.idMeal} />
          ))}
      </Row>
    </Container>
  );
};

export default Home;
