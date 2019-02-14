import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import UserList from './users-list';
import UserDetail from './user-detail';
import Search from './search';
// import { Loading } from '../containers/loading';

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

        const { users } = this.props;
        console.log(users);


        //load users from here
    }

    render() {
        return (
            <Router>
                <div>
                    <h1>Assignment + React Redux + SSR + NOW + FUN!!</h1>

                    <Search />

                    {/* <UserList /> */}

                    <Switch>
                        <Route className="list-container" exact path="/" component={() => (<UserList users={this.props.users} />)} />

                        <Route path="/:user" component={() => (<UserDetail />)} />
                    </Switch>
                    {/* <div className="alert alert-info"><Loading message={}/></div> */}
                </div>
            </Router>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.users,
        activeUser: state.activeUser
    }
}

export default connect(mapStateToProps)(Dashboard);
