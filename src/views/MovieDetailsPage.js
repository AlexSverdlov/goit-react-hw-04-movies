import React, { Component, Suspense, lazy } from 'react';
import { Route, Link } from 'react-router-dom';
// import Cast from '../components/Cast';
// import Reviews from '../components/Reviews';
import styles from './MovieDetailsPage.module.css';
import { fetchMovie } from '../services/todos-api';

const Cast = lazy(() =>
  import('../components/Cast' /* webpackChunkName: "Cast" */),
);
const Reviews = lazy(() =>
  import('../components/Reviews' /* webpackChunkName: "Reviews" */),
);

class MovieDetailsPage extends Component {
  state = {
    poster_path: '',
    title: '',
    release_date: '',
    overview: '',
    genres: [],
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    fetchMovie(movieId)
      .then(data => {
        this.setState({ ...data });
      })
      .catch(err => console.log(err));
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
            <Link
              to={{
                pathname: `${this.props.match.url}/cast`,
                state: {
                  from:
                    this.props.location.state && this.props.location.state.from
                      ? this.props.location.state.from
                      : {},
                },
              }}
            >
              Cast
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: `${this.props.match.url}/reviews`,
                state: {
                  from:
                    this.props.location.state && this.props.location.state.from
                      ? this.props.location.state.from
                      : {},
                },
              }}
            >
              Reviews
            </Link>
          </li>
        </ul>
        <hr />
        <Suspense fallback={<h1>Загрузка...</h1>}>
          <Route path={`${this.props.match.path}/cast`} component={Cast} />
          <Route
            path={`${this.props.match.path}/reviews`}
            component={Reviews}
          />
        </Suspense>
      </>
    );
  }
}

export default MovieDetailsPage;
