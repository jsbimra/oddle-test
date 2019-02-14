import * as types from './actionTypes';
import API from '../api/api';
import { loading } from './loading-action';
import { searchLoader } from './loading-action';

export function loadUsersSuccess(users) {
    return {
        type: types.LOAD_USERS_SUCCESS,
        users
    }
}

export function loadUsers(users) {
    return function (dispatch) {
        if (users.length) {
            dispatch(loadUsersSuccess(users));
            dispatch(searchLoader(false));
        }
        // dispatch(loading(true));
        // // console.log('ACTION: LOAD BEFORE SUCCESS ');
        // return API.getUsers(since).then(users => {

        //     dispatch(loading(false));
        //     // console.log('ACTION: LOAD SUCCESS ');
        // }).catch(err => {
        //     throw (err);
        // })
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

