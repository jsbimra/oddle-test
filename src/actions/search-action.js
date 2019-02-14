import * as types from './actionTypes';
import API from '../api/api';
// import { searchLoader, loading } from './loading-action';
import { searchLoader } from './loading-action';
import { loadUsers } from '../actions/user-action';

export const onUserSearch = (val) => {
    // console.log('user on search event', val);
    return (dispatch) => {
        // console.log('ACTION: LOAD BEFORE SUCCESS ');
        if (val !== '') {
            dispatch(searchLoader(true));
            return API.searchByUsers(val).then(users => {
                // console.log(users);

                //if API hit limit reached
                // if(users.message) {
                //     dispatch(searchLoader(false));
                //     dispatch(loading(users.message));
                // }

                if (users.total_count !== 0) {
                    const usersList = users.items;
                    dispatch(loadUsers(usersList));
                } else {
                    dispatch(searchLoader(false));
                }
            }).catch(err => {
                dispatch(searchLoader(false));
                console.error(new Error(err));
                throw (err);
            });
        }

        return {
            type: 'ON_USER_SEARCH',
            searchKeyword: val
        };
    }
}