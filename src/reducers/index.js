import { combineReducers } from 'redux';
import { PageLoadingReducer, SearchLoaderReducer } from './loading-reducer';
import { ActiveUserReducer, SelectedUsernameReducer } from './user-detail-reducer';
import UsersReducers from './users-reducer';
import SearchReducer from './search-reducer';
import { PaginationReducer } from './pagination-reducer';

const allReducers = combineReducers({
    activeUser: ActiveUserReducer,
    selectedDetailUsername: SelectedUsernameReducer,
    users: UsersReducers,
    loadingStatus: PageLoadingReducer,
    searchLoaderStatus: SearchLoaderReducer,
    searchKeyword: SearchReducer,
    pagination: PaginationReducer
});

export default allReducers;