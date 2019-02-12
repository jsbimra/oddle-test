import React, { Component } from 'react';
// import UserList from '../containers/user-list';
// import UserDetail from '../containers/user-detail';
import MovieList from '../containers/movies-list';
import DetailModal from '../containers/detail-modal';
import Search from '../containers/search';
import '../scss/style.scss';

class App extends Component {
    render() {
        return (
            <div className="main-wrapper">
                <Search />

                <div className="movies-container">
                    <MovieList />
                </div>

                <div className="modal-wrapper">
                    <DetailModal />
                </div>

                

            </div>
        )
    }
}

export default App;