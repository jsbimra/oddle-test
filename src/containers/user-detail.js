import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserDetail extends Component {
  constructor(props) {
    super(props);

    this.modalClose = this.modalClose.bind(this);
  }
  modalClose(e) {
    e.preventDefault();
    console.log('close fired');
    const detailContainer = document.querySelector('.modal-wrapper');
    detailContainer.classList.remove('expand');
  }
  render() {
    const user = this.props.activeUser ? this.props.activeUser : undefined;
    console.log(user);
    let detailTemplate = '';
    if (!user) return '';
    if(user) {
      detailTemplate =  (
        <div className="modal-container">
          <div className="modal-header hide">
            <h3>User detail</h3>
          </div>
  
          <div className="modal-body">
            <h4>{user.login.toUpperCase()}</h4>
            <p className="text-center">
              <img src={user.avatar_url} alt="thumb" height="190px" />
            </p>
          </div>
  
          <div className="modal-footer">
            <div className="float-right">
              <button name="okModalBtn" className="modal-btn" onClick={this.modalClose}>Close</button>
            </div>
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

export default connect(mapStateToProps)(UserDetail);