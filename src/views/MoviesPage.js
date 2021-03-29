import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import { fetchSearch } from '../services/todos-api';

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
    fetchSearch(nextCategory)
      .then(data => this.setState({ films: data, cursearch: '' }))
      .catch(err => console.log(err));
  };

  handleChange = e => {
    const { value } = e.currentTarget;
    this.setState({ cursearch: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${this.state.cursearch}`,
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.cursearch}
            onChange={this.handleChange}
          />
          <button type="submit">Find</button>
        </form>
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
