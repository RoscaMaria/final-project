import React, { useContext } from "react";
import { DashboardContext } from "../store/Favourites/context";
import FavRecipeCard from "../components/FavRecipeCard";
import { Container, Row } from "react-bootstrap";

import "../pages/Favourites.css"



export default function Favourites() {
  const { state: dashboardState } =
    useContext(DashboardContext);

  console.log("dashboard state", dashboardState);

  if (!dashboardState || !dashboardState.recipes) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="favourites">
        {dashboardState.recipes.length === 0 ? (
          <h3>It Looks like you have no favourites</h3>
        ) : (
          <>
          <Container>
            <Row className="fav-recipes">
            
          <h3 style={{marginBottom: "100px"}} >You found your favourites! Celebrate by firing up your oven!</h3>
          {dashboardState.recipes.map((recipe, index) => (
            
            
            <div key={recipe.idMeal}>
              <FavRecipeCard key={index} {...recipe} />
            </div>
            ))}
            </Row>
          </Container>

          </>
          
          
        )}
      </div>
    </>
  );
}
