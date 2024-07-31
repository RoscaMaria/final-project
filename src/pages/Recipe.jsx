import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spinner, Container, Row, Col, Image } from "react-bootstrap";

import {ListContext} from "../store/GroceryList/context";

import "./Recipe.css";



import useFetch from "../hooks/useFetch";
import { useContext } from "react";
import { addToList, removeFromList } from "../store/GroceryList/actions";

function Recipe() {
  const { recipeId } = useParams();
  const {state: listState, dispatch: listDispatch} = useContext(ListContext);
  

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



  return (

    <Container>
      <Row>
        <Col>
        <h1 style={{}}>{recipe.strMeal}</h1>
        <Image src={recipe.strMealThumb} style={{width: '100%', marginBottom: '100px', marginTop: '50px'} } rounded  className="recipeImage"/>
        </Col>
        </Row>
      <Row className="recipe-instructions" style={{marginBottom: '50px'}}>
        
        <Col sm={5}>
        <h2 style={{borderBottom: "2px solid black"}}>Ingredients</h2>
        {
          ingredients.map((ingredient, index) => (
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
          ))
        }
  
        </Col>
        <Col>
        <h2 style={{borderBottom: "2px solid black"}}>Steps</h2>
        <p>{recipe.strInstructions}</p>
        </Col>
      </Row>
     
    </Container>
  


  );
}

export default Recipe;
