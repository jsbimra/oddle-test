import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router'; //for redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectUser, loadUsers } from '../actions/user-action';
// import UserDetail from '../containers/user-detail';

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    }

    this.selectUser = this.selectUser.bind(this);
    this.reloadAction = this.reloadAction.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    // console.log('COMPONENT: componentWillReceiveProps ', nextProps);
    // if(this.props.loading !== nextProps.loading) {
    //   this.props.loading = nextProps;
    // }
  }
  componentDidUpdate(nextProps) {
    // console.log('COMPONENT: componentDidUpdate ', nextProps);

  }
  componentDidMount() {
    // console.log('PROPS: loading', this.props.loadingStatus)
  }
  reloadAction() {

  }
  selectUser(user) {
    this.props.selectUser(user);
  }

  createList() {
    if (this.props.users.length) {
      return this.props.users.map((item, idx) => {
        return (
          <li key={idx}>
            <Link to={`/${item.login}`}>
              <img src={item.avatar_url} alt="user-thumb" height="100px" />
              <p>{`${item.login.toUpperCase()}`}</p>
            </Link>
            {/* <Link to={`/${item.login}`} onClick={(e) => {
              e.preventDefault();
              this.selectUser(item);
            }}>
              <img src={item.avatar_url} alt="user-thumb" height="100px" />
              <p>{`${item.login.toUpperCase()}`}</p>
            </Link> */}
          </li>
        )
      })
    } else {
      return ''
    }
  }
  render() {
    let ListContainerData;
    if (this.props.users.length) {
      ListContainerData = (
        // <Router>
          <div>
            <h2>Users List</h2>
            <ul>
              {this.createList()}
            </ul>

          </div>
        // </Router>
      );
    } else {
      // ListContainerData = (<Loading message="Type to search users" />);
    }

    return (
      <div className="list-container">
        {ListContainerData}
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log('state ', state);
  return {
    users: state.users,
    loadingStatus: state.loadingStatus,
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    selectUser,
    loadUsers,
  }, dispatch);
}

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(UsersList));