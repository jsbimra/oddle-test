import initialState from "./initialState";
import * as types from "../actions/actionTypes";

export const PaginationReducer = (state = initialState.pagination, action) => {
    switch (action.type) {
        case types.PAGINATION_SET: {
            return action.pagination
        }
        default:
            return state;
    }
}