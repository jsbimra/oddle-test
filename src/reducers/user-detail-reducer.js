import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState.activeUser, action) => {
    switch (action.type) {
        case types.OPEN_MODAL: {
            // console.log('REDUCER: OPEN MODAL ', action);
            return action.activeUser;
        }   
        default: 
            return state;
    }
}