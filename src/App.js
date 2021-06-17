import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoPage } from './Pages/TodoPage'
import { Show } from './Pages/Show'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <TodoPage />
          </Route>
          <Route path='/:id'>
            <Show />
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
