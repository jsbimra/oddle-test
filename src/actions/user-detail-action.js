import * as types from './actionTypes';
import API from '../api/api';

function selectedDetailUser(username) {
    return {
        type: types.SELECTED_DETAIL_USERNAME,
        username
    } 
}
export function updateUserDetail(user) {
    console.log('USER DETAIL UPDATE ACTION: ', user)
    return {
        type: types.USER_DETAIL_VIEW,
        activeUser: user
    }
}

export function fetchUserDetail(username) {
    return (dispatch) => {

        //update selected user state
        dispatch(selectedDetailUser(username));

        return API.searchByUsers(username).then(users => {
            if (users.total_count !== 0) {
                const user = users.items[0];
                dispatch(updateUserDetail(user));
            } 
        }).catch(err => {
            console.error(new Error(err));
            throw (err);
        });
    }
}

export function fetchBlockData(url) {
    
    return fetch(url).then(resp => resp.json())
    .then(data => data)
    .catch(err => console.error(new Error(err)));
}