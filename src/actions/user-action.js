import * as types from './actionTypes';
import API from '../api/api';
import { loading } from './loading-action';
// import { openModal } from './user-details';

export function loadUsersSuccess(users) {
    return {
        type: types.LOAD_USERS_SUCCESS,
        users
    }
}

export function loadUsers(since) {
    return function (dispatch) {
        dispatch(loading(true));
        // console.log('ACTION: LOAD BEFORE SUCCESS ');
        return API.getUsers(since).then(users => {
            // console.log('from loadMovies action', movies);
            dispatch(loadUsersSuccess(users));
            dispatch(loading(false));
            // console.log('ACTION: LOAD SUCCESS ');
        }).catch(err => {
            throw (err);
        })
    }
}

export const selectUser = (user) => {
    console.log(`Your selected following : ${user}`);

    return (dispatch) => {

        // dispatch(openModal(user));

        return {
            type: 'USER_SELECTED',
            payload: user,
        }
    }
};

