import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'; //for redux
import { connect } from 'react-redux';

import { fetchUserDetail } from '../actions/user-detail-action';
import { bindActionCreators } from 'redux';

class UserDetail extends Component {

  componentWillMount(prevProps) {
    const { match, activeUser } = this.props;
    const username = match.params.user ? match.params.user : null;

    if (!Object.keys(activeUser).length) {
      this.props.history.push('/');
    }

  }

  componentWillUnmount() {

  }

  // getUserDetail(username) {
  //   console.log('username is: ', username.trim());
  //   const userdetail = this.props.fetchUserDetail(username.trim());

  //   console.log(userdetail);
  //   // return userdetail;
  // }

  render() {

    const { activeUser: user } = this.props;

    let detailTemplate = '';

    if (Object.keys(user).length) {
      detailTemplate = (
        <div className="list-detail-container">
          <h2>USER - {user.login.toUpperCase()}</h2>

          <div className="block-container">
            <div className="block avatar"><img src={user.avatar_url} alt="user-thumb" height="150px" className="round-img float-left" /></div>
            <div className="block followers">
              <h3>Followers</h3>
              {user.followers_url}
            </div>
            <div className="block following">
              <h3>Following</h3>

              {user.following_url}
            </div>
            <div className="block repos">
              <h3>Repos</h3>
              {user.repos_url}</div>
            {/* <p>{user.}</p> */}
          </div>
          <p className="text-center clearfix"><Link to="/" className="float-right1">&8592; back to list</Link></p>
        </div>
      )
    }

    return detailTemplate;
  }
}

function mapStateToProps(state) {
  return {
    activeUser: state.activeUser
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchUserDetail
  }, dispatch);
}

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(UserDetail));
