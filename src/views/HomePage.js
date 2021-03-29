import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrending } from '../services/todos-api';

class HomePage extends Component {
  state = {
    films: [],
  };

  componentDidMount() {
    fetchTrending()
      .then(results => {
        this.setState({ films: results });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <>
        <h1>Trending today</h1>
        <ul>
          {this.state.films.map(film => (
            <li key={film.id}>
              <Link
                to={{
                  pathname: `/movies/${film.id}`,
                  state: {
                    from: this.props.location,
                  },
                }}
              >
                {film.title}
              </Link>
            </li>
          ))}
        </ul>
        <hr />
      </>
    );
  }
}

export default HomePage;
