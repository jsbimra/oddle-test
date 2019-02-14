import React, { Component } from 'react';
import { withRouter } from 'react-router'; //for redux
import { connect } from 'react-redux';

class UserDetail extends Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
    console.log('USER DETAIL Comp WILL MOUNT TRIGGER ');
  }
  render(match) {
    console.log(match);
    const { activeUser: user } = this.props;
    console.log(this.props);

    if (!user) return (<h1>No props data found</h1>);

    let detailTemplate = '';

    if (user) {
      detailTemplate = (
        <div className="list-detail-container">
          <h1>Following user detail: </h1>
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

export default withRouter(connect(mapStateToProps)(UserDetail));
