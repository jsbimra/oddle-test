import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import createStore from './store';
import App from './components/app';
import { onUserSearch } from './actions/search-action';

const { store, history } = createStore();

//let's tell the store to dispatch our loadMovies action
store.dispatch(onUserSearch(store.getState().searchKeyword));


const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;
renderMethod(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);

// const { hydrate, render} = ReactDOM;
// const Application = (
//     <Provider store={store}>
//         <ConnectedRouter history={history}>
//             <Frontload noServerRender={true}>
//                 <App />
//             </Frontload>
//         </ConnectedRouter>
//     </Provider>
// );

// const root = document.querySelector('#root');

// if (root.hasChildNodes() === true) {
//     // If it's an SSR, we use hydrate to get fast page loads by just
//     // attaching event listeners after the initial render
//     Loadable.preloadReady().then(() => {
//         hydrate(Application, root);
//     });
// } else {
//     // If we're not running on the server, just render like normal
//     render(Application, root);
// }
