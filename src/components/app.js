import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import '../scss/style.scss';

// import Dashboard from '../containers/dashboard';

import UserList from '../containers/users-list';
import UserDetail from '../containers/user-detail';
class App extends Component {
    componentDidMount() {
        console.log(this.props);
    }
    render() {
        return (
            <Router>
                <div>
                    {/* <Route path="/" component={Dashboard} /> */}
                    <h1>Assignment + React Redux + SSR + NOW + FUN!!</h1>
                    <hr />
                    
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

export default connect(mapStateToProps)(App);