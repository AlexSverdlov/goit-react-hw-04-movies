import React, { Component } from 'react';
import Axios from 'axios';
import { Route, Link } from 'react-router-dom';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';
import styles from './MovieDetailsPage.module.css';

class MovieDetailsPage extends Component {
  state = {
    poster_path: '',
    title: '',
    release_date: '',
    overview: '',
    genres: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=bbc6386a0bc633f77c6faed806ceae64&language=en-US`,
    ).then(response => response.data);
    this.setState({ ...response });
  }

  handleGoBack = () => {
    const { location, history } = this.props;
    if (location.state && location.state.from) {
      history.push(location.state.from);
    }
  };

  render() {
    const aa = 'https://image.tmdb.org/t/p/w500' + this.state.poster_path;
    return (
      <>
        <button type="button" onClick={this.handleGoBack}>
          Go back
        </button>
        <div className={styles.container}>
          <img src={aa} alt="" className={styles.image} />
          <div className={styles.containerAbout}>
            <h2>
              {this.state.title} ({this.state.release_date.substring(0, 4)})
            </h2>
            <h3>Overview</h3>
            <p>{this.state.overview}</p>
            <h4>Genres</h4>
            <p>
              {this.state.genres.map(genre => (
                <span key={genre.id}> {genre.name} </span>
              ))}
            </p>
          </div>
        </div>
        <hr />
        <h4>Additional information</h4>
        <ul>
          <li>
            <Link to={`${this.props.match.url}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/reviews`}>Reviews</Link>
          </li>
        </ul>
        <hr />
        <Route path={`${this.props.match.path}/cast`} component={Cast} />
        <Route path={`${this.props.match.path}/reviews`} component={Reviews} />
      </>
    );
  }
}

export default MovieDetailsPage;
