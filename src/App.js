import './App.css';
import React from "react";
import Home from './pages/Home';
import Layout from './components/Layout';
import Page404 from './pages/Page404';

import { Route, Routes } from "react-router-dom";

import GroceryList from './pages/GroceryList';
import Favourites from './pages/Favourites';

function App() {
  
  return (
    <div>
      
       <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/grocery-list" element={<GroceryList />} />

          <Route path="*" element={<Page404 />}/>
        </Routes>
      </Layout>  
      
      
      
     
    </div>
    
    
  );
}

export default App;
