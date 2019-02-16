import API from '../api/api';
import { searchLoader } from './loading-action';
import { loadUsers } from '../actions/user-action';
import { setPaginationState } from '../actions/pagination-action';

export const onUserSearch = (val) => {
    return (dispatch) => {
        if (val !== '') {
            dispatch(searchLoader(true));
            dispatch(updateSearchkeyword(val));
            return API.searchByUsers(val).then(resp => {
                const { users, paginationLink } = resp;
                if (users) {
                    dispatch(loadUsers(users));
                    dispatch(setPaginationState(paginationLink));
                    if (users.total_count === 0) dispatch(searchLoader(false));
                }

            }).catch(err => {
                dispatch(searchLoader(false));
                console.error(new Error(err));
                throw (err);
            });
        }
    }
}

export const updateSearchkeyword = value => ({
    type: 'ON_USER_SEARCH',
    searchKeyword: value
});