import React, { Component } from 'react';

import UserList from '../containers/users-list';
import Search from '../containers/search';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <h1>Assignment + React Redux + SSR + NOW + FUN!!</h1>
                <Search />

                <div className="list-container">
                    <UserList />
                </div>
            </div>
        )
    }
}


export default Dashboard;
