import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Movies from './Component/MoviesGet';
import Books from './Component/Books/Books';
import Navbar from './Component/Nav';

function App() {
  return (
    <div className="App container px-4 ">
      <Route>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Movies} />
          <Route path="/books" component={Books} />
        </Switch>
      </Route>
    </div>
  );
}

export default App;
