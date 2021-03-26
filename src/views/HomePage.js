import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

class HomePage extends Component {
  state = {
    films: [],
  };

  async componentDidMount() {
    const response = await Axios.get(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=bbc6386a0bc633f77c6faed806ceae64',
    ).then(response => response.data.results);
    this.setState({ films: response });
    // console.log(response);
  }
  render() {
    // console.log(this.props.match.url);
    return (
      <>
        <h1>Trending today</h1>
        <ul>
          {this.state.films.map(film => (
            <li key={film.id}>
              <Link to={`/movies/${film.id}`}>{film.title}</Link>
            </li>
          ))}
        </ul>
        <hr />
      </>
    );
  }
}

export default HomePage;
