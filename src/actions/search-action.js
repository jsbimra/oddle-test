import * as types from './actionTypes';

export const onUserSearch = (val) => {
    console.log('user on search event', val);
    return {
        action: types.ON_USER_SEARCH,
        userSearchVal: val
    }
}