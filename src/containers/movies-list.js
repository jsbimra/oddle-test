import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Loading from '../containers/loading';
import { selectMovie, deleteMovie, loadMovies } from '../actions/movie-action';

class MoviesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    }
    
    this.selectMovie = this.selectMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
    this.reloadAction = this.reloadAction.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    // console.log('COMPONENT: componentWillReceiveProps ', nextProps);
    // if(this.props.loading !== nextProps.loading) {
    //   this.props.loading = nextProps;
    // }
  }
  componentDidUpdate(nextProps) {
    // console.log('COMPONENT: componentDidUpdate ', nextProps);

  }
  componentDidMount() {
    // console.log('PROPS: loading', this.props.loadingStatus)
  }
  reloadAction() {
    this.props.loadMovies();
  }
  selectMovie(movie) {
    this.props.selectMovie(movie);
  }
  deleteMovie(movie) {
    this.props.deleteMovie(movie);
  }
  createMovieList() {
    if (this.props.movies.length) {
      return this.props.movies.map((movie, idx) => {
        return (
          <li key={idx}>
            <a href="#" onClick={(e) => {
              e.preventDefault();
              this.selectMovie(movie);
            }}>
              <img src={movie.Poster} alt="movie-thumb" height="100px" className="float-left" />{`${movie.Title} ${movie.Year}`}
            </a>
            <a href="#" onClick={(e) => {
              e.preventDefault();
              this.deleteMovie(movie);
            }} className="float-right text-danger">X</a>

          </li>
        )
      })
    } else {
      return (
        <p className="text-center">
          <strong>No more records!!</strong> <br /><br />
          <a href="#" onClick={this.reloadAction}>Reload?</a>
        </p>
      )
    }
  }
  render() {
    let MovieContainerData;
    if (!this.props.loadingStatus) {
      MovieContainerData = (
        <div>
          <h2>List of Movies</h2>
          <ul>
            {this.createMovieList()}
          </ul>
        </div>
      );
    } else {
      MovieContainerData = (<Loading message="Please wait.. we are fetching data" />);
      // MovieContainerData = (<h3>Loading...</h3>);
    }

    return (
      <div className="movie-list-container">
        {MovieContainerData}
      </div>
      );
  }
}

// MoviesList.propTypes = {
//   movies: PropTypes.array.isRequired,
//   loadingStatus: PropTypes.bool
// }

function mapStateToProps(state) {
  // console.log('state ', state);
  return {
    movies: state.movies,
    loadingStatus: state.loadingStatus,
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    selectMovie,
    deleteMovie,
    loadMovies,
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(MoviesList);