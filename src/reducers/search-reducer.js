import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState.searchKeyword, action) => {
    switch (action.type) {
        case types.ON_USER_SEARCH: {
            console.log(action);
            return action.searchKeyword
        }
        default:
            return state;
    }
};