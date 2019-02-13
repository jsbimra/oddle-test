import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//we need search-action
import { onUserSearch } from '../actions/search-action';

class Search extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="search-panel">
                <input type="text" name="search" className="search-input" value={this.props.searchKeyword} onChange={ ()=> {
                    this.props.onSearch(`${this.props.searchKeyword}`);
                }
                 } />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        searchKeyword: state.searchKeyword ? state.searchKeyword : ''
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        onSearch: onUserSearch
    }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(Search);
