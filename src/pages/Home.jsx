import React, { useContext, useEffect, useReducer, useState } from "react";
import { Container, Row, Spinner, Col } from "react-bootstrap";

import videoFile from "../assets/videos/backdrop.mp4";

import RecipeCard from "../components/RecipeCard";

import useFetch from "../hooks/useFetch";

import "../pages/Home.css";

function Home() {
  const { data, loading, error } = useFetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert"
  );

  if (loading) return <Spinner />;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
    <Container className="container-video">
      <Row className="header">
        <video className="backdrop-video" controls loop autoPlay muted>
          
          <source src={videoFile} type="video/mp4"></source>
        </video>
      </Row>
      </Container>
      <Container>

      <Row className="latest-rceipes" style={{marginBottom: "50"}}>
        <h2> LATEST RECIPES</h2>
        <p>Here's some of the latest recipes that can staisfy your sweet tooth! Find your favourite and share (or don't) with your friends.</p>
      </Row>

      <Row className="container2" >
        
        {data &&
          data.meals.map((recipe, index) => (
            <Col >
              <RecipeCard key={index} {...recipe} />
            </Col>
            
          ))}
        
        
      </Row>
    </Container>
    </>
  );
}

export default Home;
