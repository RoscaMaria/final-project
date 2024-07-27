import React, { useContext, useEffect, useReducer, useState } from "react";
import { Col, Container, Row, Spinner, Card } from "react-bootstrap";

import RecipeCard from "../components/RecipeCard";

import useFetch from "../hooks/useFetch";


function Home () {
  /* useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a", {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []); */

  //const [recipes, setRecipes] = React.useState([]);
  //cum o sa pot folosi state-ul pt un recipe daca nu folosesc use state cand le afisez?
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

      {/* <Row>
        {data && 
        data.meals.map((recipe, index) => (
          <Col key={index}>
            <img src={recipe.strMealThumb} alt="recipe-image" />
            <h4>{recipe.strMeal}</h4>
            
          </Col>
        ))}
      </Row> */}
      <Row>
        {data &&
          data.meals.map((recipe, index) => (
            <RecipeCard image={recipe.strMealThumb} title={recipe.strMeal} />
          ))}
      </Row>
    </Container>
  );
};

export default Home;
