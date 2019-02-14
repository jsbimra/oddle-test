import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Loading from './loading';
import { selectUser, loadUsers } from '../actions/user-action';

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
            <a href="#" onClick={(e) => {
              e.preventDefault();
              this.selectUser(item);
            }}>
              <p>{`${item.login.toUpperCase()}`}</p>
              <img src={item.avatar_url} alt="user-thumb" height="100px" />
            </a>
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
        <div>
          <h2>Users List</h2>
          <ul>
            {this.createList()}
          </ul>
        </div>
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

export default connect(mapStateToProps, matchDispatchToProps)(UsersList);