import React, { Component } from 'react';
import Axios from 'axios';

class Reviews extends Component {
  state = {
    results: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=bbc6386a0bc633f77c6faed806ceae64&language=en-US&page=1`,
    ).then(response => response.data);
    this.setState({ ...response });
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
