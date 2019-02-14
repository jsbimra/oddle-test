import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import '../scss/style.scss';

// import Dashboard from '../containers/dashboard';

import UserList from '../containers/users-list';
import UserDetail from '../containers/user-detail';
import Search from '../containers/search';
class App extends Component {
    render() {
        const { children } = this.props;
        console.log(children);
        return (
            <Router>
                <div>
                    {/* <Route path="/" component={Dashboard} /> */}
                    <h1>Assignment + React Redux + SSR + NOW + FUN!!</h1>
                    <Search />
                    <Route exact path="/" component={() => (<UserList />)} />
                    <Route path="/:user" component={() => (<UserDetail />)} />

                </div>
            </Router>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.user,
        activeUser: state.activeUser,
    }
}

export default withRouter(connect(mapStateToProps)(App));