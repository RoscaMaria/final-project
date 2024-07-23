import React, { useContext, useEffect, useReducer, useState } from "react";


const Home = () => {
  useEffect(() => {
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
  }, []);

  return (
    <div>
      <h1>My Component</h1>
    </div>
  );
};

export default Home;
