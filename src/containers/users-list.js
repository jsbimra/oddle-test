import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectUser } from '../actions/user-action';
import Search from '../containers/search';
import Pagination from '../containers/pagination';
import { config } from '../api/config';

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    }
    this.selectUser = this.selectUser.bind(this);
  }
  componentDidUpdate(prevProps) {
    // console.log('compontent did update ', this.props.users);
    if (prevProps.users !== this.props.users) {
    // console.log('inside IF compontent did update ', this.props.users);
      this.createList();
    }
  }
  selectUser(user, navigateToPath) {
    this.props.selectUser(user);
    this.props.history.push(navigateToPath);
  }

  createList() {
    const { items, status, message } = this.props.users;
    // console.log('create List user action: ', items);

    if (status === 403)
      return (<p className="text-center">Oops, <em style={{ color: 'orangered' }}>{message}</em></p>)

    if (items && items.length) {
      return items.map((item, idx) => {
        return (
          <li key={idx}>
            <Link to={`/${item.login}`} onClick={(e) => {
              e.preventDefault();
              this.selectUser(item, `/${item.login}`);
            }}>
              <img src={item.avatar_url} alt="user-thumb" height="100px" />
              <p>{`${item.login.toUpperCase()}`}</p>
            </Link>
          </li>
        )
      })
    } else {
      return (<p className="text-center">Oops, no user found with <em style={{ color: 'orangered' }}>"{this.props.searchKeyword}"</em></p>)
    }
  }
  render() {
    let ListContainerData;
    const { users } = this.props;

    if (users && users.items) {
      ListContainerData = (
        <div>
          <h2>Users</h2>
          <ul>
            {this.createList()}
          </ul>
          {/* {to tackle weired scenario for, of tatal_count and no items length found} */}
          {(users.total_count > config.PER_PAGE_COUNT && users.items.length) ? (<Pagination records={users} />) : ''}
        </div>
      );
    } else {
      // ListContainerData = (<Loading message="Type to search users" />);
    }

    return (
      <div className="clearfix">
        <Search />
        <div className="list-container">
          {ListContainerData}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchKeyword: state.searchKeyword,
    users: state.users,
    loadingStatus: state.loadingStatus,
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    selectUser
  }, dispatch);
}

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(UsersList));