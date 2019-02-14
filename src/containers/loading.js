import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { loading } from '../actions/loading-action';
export class Loading extends Component {
    render() {
        return (
            <div className="text-center">
                <strong>{this.props.message}</strong>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        loadingStatus: state.loadingStatus
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        loading
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Loading);