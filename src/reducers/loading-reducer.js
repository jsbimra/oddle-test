import * as types from '../actions/actionTypes';
import initialState from './initialState';

export const pageLoadingReducer = (state = initialState.loadingStatus, action) => {
    switch (action.type) {
        case types.LOADING: {
            console.log('REDUCER: LOADING ', action);
            return action.status
        }
        default: 
            return state
    }
}

export const searchLoaderReducer = (state = initialState.searchLoaderStatus, action) => {
    switch (action.type) {
        case types.SEARCH_LOADER: {
            console.log('REDUCER: SEARCH LOADER ', action);
            return action.status
        }
        default: 
            return state
    }
}