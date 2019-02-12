import { combineReducers } from 'redux';
import LoadingReducer from './loading-reducer';
import UsersReducers from './users-reducer';
import ActiveUserReducer from './user-detail-reducer';

const allReducers = combineReducers({
    activeUser: ActiveUserReducer,
    users: UsersReducers,
    loadingStatus: LoadingReducer,
});

export default allReducers;