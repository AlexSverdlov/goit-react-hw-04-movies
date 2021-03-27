import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

class MoviesPage extends Component {
  state = {
    cursearch: '',
    films: [],
  };

  componentDidMount() {
    const category = this.getCategoryFromProps(this.props);
    if (category) {
      this.getFromAPI(category);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const prevCategory = this.getCategoryFromProps(prevProps);
    const nextCategory = this.getCategoryFromProps(this.props);

    if (prevCategory !== nextCategory) {
      this.getFromAPI(nextCategory);
    }
  }

  getCategoryFromProps = props =>
    queryString.parse(props.location.search).query;

  getFromAPI = nextCategory => {
    Axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=bbc6386a0bc633f77c6faed806ceae64&query=${nextCategory}`,
    )
      .then(response => response.data.results)
      .then(data => this.setState({ films: data, cursearch: '' }));
  };

  handleChange = e => {
    const { value } = e.currentTarget;
    this.setState({ cursearch: value });
  };
  handleClick = e => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${this.state.cursearch}`,
    });
  };

  render() {
    return (
      <>
        <input
          type="text"
          value={this.state.cursearch}
          onChange={this.handleChange}
        />
        <button type="button" onClick={this.handleClick}>
          Find
        </button>
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
      </>
    );
  }
}

export default MoviesPage;
