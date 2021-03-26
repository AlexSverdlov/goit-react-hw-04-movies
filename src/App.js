import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <ul className="navigation">
          <li>
            <NavLink
              exact
              to="/"
              className="NavLink"
              activeClassName="NavLink-active"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/movies"
              className="NavLink"
              activeClassName="NavLink-active"
            >
              Moves
            </NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/movies/:movieId" component={MovieDetailsPage} />
          <Route path="/movies" component={MoviesPage} />
          <Route component={HomePage} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
