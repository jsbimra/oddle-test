import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import allReducers from './reducers';
import App from './components/app';
import { onUserSearch } from './actions/search-action';

const store = createStore(allReducers, applyMiddleware(thunk));

//let's tell the store to dispatch our loadMovies action
store.dispatch(onUserSearch('god'));

const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;

renderMethod(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
