import React, { Component } from 'react';
import { fetchCast } from '../services/todos-api';

class Cast extends Component {
  state = {
    cast: [],
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    fetchCast(movieId)
      .then(data => {
        this.setState({ ...data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <ul>
        {this.state.cast.map(oneCharacter => (
          <li key={oneCharacter.credit_id}>
            <p>{oneCharacter.name}</p>
            <img
              src={
                'https://image.tmdb.org/t/p/w500' + oneCharacter.profile_path
              }
              alt=""
              style={{
                height: 200,
              }}
            />
            <p>character: {oneCharacter.character}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default Cast;
