import { combineReducers } from 'redux';
import {pageLoadingReducer, searchLoaderReducer} from './loading-reducer';
import UsersReducers from './users-reducer';
import ActiveUserReducer from './user-detail-reducer';
import SearchReducer from './search-reducer';

const allReducers = combineReducers({
    activeUser: ActiveUserReducer,
    users: UsersReducers,
    loadingStatus: pageLoadingReducer,
    searchLoaderStatus: searchLoaderReducer,
    searchKeyword: SearchReducer
});

export default allReducers;