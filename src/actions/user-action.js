import * as types from './actionTypes';
import API from '../api/api';

import { searchLoader } from './loading-action';
import { updateUserDetail } from './user-detail-action';

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
    }
}

export const selectUser = (user) => {
    console.log(`Your selected following : ${user}`, user);

    return (dispatch) => {
        dispatch(updateUserDetail(user));
    }
};

