import * as types from './actionTypes';
import parseLink from 'parse-link-header';
import Axios from 'axios';
import { loadUsers } from './user-action';
import { config } from '../api/config';

export const setPaginationState = info => {
    let pagination = parseLink(info);
    return {
        type: types.PAGINATION_SET,
        pagination
    }
}

export const handleError = err => err.msg

export const loadMore = (navInfo) => {
    return (dispatch) => {
        if (navInfo.url) {
            Axios.get(navInfo.url).then(response => {
                const users = response.data
                dispatch(loadUsers(users))
                const paginationLink = response.headers.link
                dispatch(setPaginationState(paginationLink))

            }).catch(err => {
                console.error(new Error(err))
                dispatch(loadUsers({items: [], status: 403, message: config.FORBIDDEN_MSG + ' '+ err }))
            });
        } else {
            dispatch(handleError({ msg: 'no navigation information found! Try later!' }))
        }
    }
}