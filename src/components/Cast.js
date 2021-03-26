import React, { Component } from 'react';
import Axios from 'axios';

class Cast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=bbc6386a0bc633f77c6faed806ceae64&language=en-US`,
    ).then(response => response.data);
    this.setState({ ...response });
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
