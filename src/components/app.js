import React, { Component } from 'react';
import UserList from '../containers/users-list';
// import UserDetail from '../containers/user-detail';
import Search from '../containers/search';
import '../scss/style.scss';

class App extends Component {
    render() {
        return (
            <div className="main-wrapper">
                <h1>Assignment + React Redux + SSR + NOW + FUN!!</h1>
                <Search />

                <div className="list-container">
                    <UserList />
                </div>
{/* 
                <div className="modal-wrapper">
                    <DetailModal />
                </div> */}

                

            </div>
        )
    }
}

export default App;