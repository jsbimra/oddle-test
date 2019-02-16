import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'; //for redux
import { connect } from 'react-redux';

import { fetchUserDetail } from '../actions/user-detail-action';
import { bindActionCreators } from 'redux';

import Block from '../containers/user-detail-block';

class UserDetail extends Component {

  componentWillMount(prevProps) {
    const { activeUser } = this.props;

    if (!Object.keys(activeUser).length) {
      this.props.history.push('/');
    }

  }

  formatURL(url) {
    if (url) {
      if (url.includes('{')) {
        return url.split('{')[0];
      } else {
        return url;
      }
    }
  }
  render() {

    const { activeUser: user } = this.props;
    let detailTemplate = '';

    if (Object.keys(user).length) {
      detailTemplate = (
        <div className="list-detail-container">
          <h2 className="title"><Link to="/" className=" back-link">&#8592;</Link> USER - {user.login.toUpperCase()}</h2>
          <div className="block-container">
            <div className="block avatar"><img src={user.avatar_url} alt="user-thumb" height="150px" className="round-img float-left" /></div>
            <Block cssClasses="block followers" apiURL={this.formatURL(user.followers_url)} title="Followers" />
            <Block cssClasses="block following" apiURL={this.formatURL(user.following_url)} title="Following" />
            <Block cssClasses="block repos" apiURL={this.formatURL(user.repos_url)} title="Repos" />
          </div>
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
