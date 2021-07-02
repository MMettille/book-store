import React from "react";
import "./App.css";

// ⬇ What we need to import
import { Route, HashRouter as Router } from "react-router-dom";

// ⬇ Importing components
import Header from '../Header/Header.jsx'
import BookList from '../BookList/BookList.jsx'

function App() {

  return (
    <Router>
      <div className='App'>
           
        <Header />
        
        <Route path="/" exact>
            <BookList />
        </Route>
            
      </div>
    </Router>
  );
}

export default App;
