import React, { Component } from 'react';
import { fetchReviews } from '../services/todos-api';

class Reviews extends Component {
  state = {
    results: [],
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    fetchReviews(movieId)
      .then(data => {
        this.setState({ ...data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <ul>
        {this.state.results.map(oneResult => (
          <li key={oneResult.id}>
            <p>Author: {oneResult.author}</p>
            <p>{oneResult.content}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default Reviews;
