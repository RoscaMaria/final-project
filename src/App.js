import "./App.css";
import React from "react";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import Layout from "./components/Layout";
import Page404 from "./pages/Page404";

import { Route, Routes } from "react-router-dom";

import GroceryList from "./pages/GroceryList";
import Favourites from "./pages/Favourites";
import { DashboardProvider } from "./store/Favourites/context";
import { ListProvider } from "./store/GroceryList/context";

function App() {
  return (
    <DashboardProvider>
      <ListProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/grocery-list" element={<GroceryList />} />
            <Route path="/recipe/:recipeId" element={<Recipe />} />
            <Route path="/favourites/recipe/:recipeId" element={<Recipe />} />

            <Route path="*" element={<Page404 />} />
          </Routes>
        </Layout>
      </ListProvider>
    </DashboardProvider>
  );
}

export default App;
