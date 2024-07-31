import React from "react";
import { ListContext } from "../store/GroceryList/context";
import { useContext } from "react";
import { Container, Row } from "react-bootstrap";

import "../pages/GroceryList.css"


export default function GroceryListPage() {
  const { state: listState, dispatch: listDispatch } = useContext(ListContext);
  return (
    <Container style={{width: "300px"}}>
      <Row>
        <h3 style={{marginBottom: "60px", marginTop: "60px"}}>Grocery list</h3>
      </Row>
      <Row>
        {listState.ingredients.length === 0 ? (
          <h3>No ingredients added to the grocery list!</h3>
        ) : (
          <span className="grocery-list">
            <p>To prepare the chosen recipes you still need some things</p>
            <p>Be sure to add to your cart the following:</p>
            {listState.ingredients.map((ingredient, index) => (
              <div >
                <li key={index} style={{ listStyle: "none" }}>
                  {ingredient}
                </li>
              </div>
            ))}
          </span>
        )}
      </Row>
    </Container>
  );
}
