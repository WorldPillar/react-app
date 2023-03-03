import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./general_style.css"

import Header from "./Header";
import MainPage from './News/MainPage'
import SearchPage from './Search/SearchPage'

import {
  BrowserRouter as Router, 
  Routes,
  Route,
  } from 'react-router-dom';


function App() {

  return (
    <div class="content">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" 
            element={<MainPage/>}
          />
          <Route path="/search" 
            element={<SearchPage/>} 
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
