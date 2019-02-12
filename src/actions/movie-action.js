import * as types from './actionTypes';
import MovieAPI from '../api/movie-api';
import { loading } from './loading-action';
import { openModal } from './detail-modal-action';

export function loadMoviesSuccess(movies) {
    return {
        type: types.LOAD_MOVIES_SUCCESS,
        movies
    }
}

export function loadMovies(word) {
    let searchTerm = word !== '' && word !== undefined ? word : 'comedy';
    return function (dispatch) {
        dispatch(loading(true));
        // console.log('ACTION: LOAD BEFORE SUCCESS ');

        return MovieAPI.getMoviesBySearch(searchTerm).then(movies => {
            // console.log('from loadMovies action', movies);
            dispatch(loadMoviesSuccess(movies));
            dispatch(loading(false));
            // console.log('ACTION: LOAD SUCCESS ');
        }).catch(err => {
            throw (err);
        })
    }
}

export const selectMovie = (movie) => {
    console.log(`Your movies is : ${movie}`);

    return (dispatch) => {

        dispatch(openModal(movie));

        return {
            type: 'MOVIE_SELECTED',
            payload: movie,
        }
    }
};


export const deleteMovie = (movies) => {
    console.log(`Your have deleted following movie : ${movies.Title}`);
    return {
        type: types.DELETE_MOVIE,
        payload: movies,
    }
};
