import * as types from './actionTypes';

export function loading (status) {
    // console.log('ACTION: LOADING ', status);
    return {
        type: types.LOADING,
        status
    }
}

export function searchLoader (status) {
    // console.log('SEARCH - LOADER STATUS ', status);
    return {
        type: types.SEARCH_LOADER,
        status
    }
}