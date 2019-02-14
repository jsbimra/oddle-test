import * as types from './actionTypes';
import API from '../api/api';
import { searchLoader } from './loading-action';
import { loadUsers } from '../actions/user-action';

export const onUserSearch = (val) => {
    console.log('user on search event', val);
    return (dispatch) => {
        dispatch(searchLoader(true));
        // console.log('ACTION: LOAD BEFORE SUCCESS ');
        return API.searchByUsers(val).then(users => {
            const usersList = users.items ? users.items : [];
            dispatch(loadUsers(usersList));
            // console.log('ACTION: LOAD SUCCESS ');
        }).catch(err => {
            dispatch(searchLoader(false));
            throw (err);
        });

        return {
            type: 'ON_USER_SEARCH',
            searchKeyword: val
        };
    }
}