import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

// import { TransitionGroup, CSSTransition } from "react-transition-group";

import '../scss/style.scss';

import UserList from '../containers/users-list';
import UserDetail from '../containers/user-detail';
class App extends Component {

    render() {
        return (
            <Router>
                <Route
                    render={({ location }) => (
                        <div className="main-wrapper">
                            <h1>Assignment + React Redux + SSR + NOW + FUN!!</h1>
                            <hr />
                            {/* <TransitionGroup> */}
                                {/* <CSSTransition key={location.key} classNames="fade" timeout={300}> */}
                                    <Switch location={location}>
                                        <Route exact path="/" component={() => (<UserList />)} />
                                        <Route path="/:user" component={() => (<UserDetail />)} />
                                    </Switch>
                                {/* </CSSTransition> */}
                            {/* </TransitionGroup> */}
                        </div>
                    )}
                />
            </Router>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.user,
        activeUser: state.activeUser,
    }
}

export default connect(mapStateToProps)(App);