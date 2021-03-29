import React, { Suspense, lazy } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import './App.css';

const HomePage = lazy(() =>
  import('./views/HomePage' /* webpackChunkName: "HomePage" */),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage' /* webpackChunkName: "MoviesPage" */),
);
const MovieDetailsPage = lazy(() =>
  import('./views/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */),
);

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
        <Suspense fallback={<h1>Загрузка...</h1>}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/movies/:movieId" component={MovieDetailsPage} />
            <Route path="/movies" component={MoviesPage} />
            <Route component={HomePage} />
          </Switch>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
