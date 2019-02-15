import * as types from './actionTypes';
// import API from '../api/api';

export const loadMore = (users) => {
    return {
        type: types.LOAD_USERS_SUCCESS,
        users
    }
}