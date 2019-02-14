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

    if(!Object.keys(activeUser).length) {
        this.props.history.push('/');
    }

  }

  // getUserDetail(username) {
  //   console.log('username is: ', username.trim());
  //   const userdetail = this.props.fetchUserDetail(username.trim());

  //   console.log(userdetail);
  //   // return userdetail;
  // }

  render() {

    const {activeUser: user} = this.props;

    let detailTemplate = '';

    if (user) {
      detailTemplate = (
        <div className="list-detail-container">
          <h1>Following user detail: {user.login}</h1>

            <h3></h3>
              {/* <img src={item.avatar_url} alt="user-thumb" height="100px" /> */}
              {/* <p></p> */}
          <p className="text-center "> <Link to="/">take me back</Link></p>
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
