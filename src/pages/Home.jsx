import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";

import RecipeCard from "../components/RecipeCard";

import useFetch from "../hooks/useFetch";

function Home() {
  const { data, loading, error } = useFetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert"
  );

  if (loading) return <Spinner />;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <Container>
      <div>
        <h1>Recipes</h1>
      </div>

      <Row>
        { data && data.meals.map((recipe, index) => <RecipeCard key={index} {...recipe} />) }
      </Row>
    </Container>
  );
}

export default Home;
