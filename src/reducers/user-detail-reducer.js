import * as types from '../actions/actionTypes';
import initialState from './initialState';

export const ActiveUserReducer = (state = initialState.activeUser, action) => {
    switch (action.type) {
        case types.USER_DETAIL_VIEW: {
            console.log('REDUCER: ACTIVE USER  ', action);
            return action.activeUser
        }   
        default: 
            return state
    }
}

export const SelectedUsernameReducer = (state = initialState.selectedDetailUsername, action) => {
    switch (action.type) {
        case types.SELECTED_DETAIL_USERNAME: {
            console.log('REDUCER: SELECTED USERNAME ', action);
            return action.username
        }
        default:
            return state
    }
}